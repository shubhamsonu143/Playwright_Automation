import { Page, expect } from "@playwright/test";
import { data } from "../data.json";

export default class CreateTable {
  static TABLEDATA = "//summary[text()='Table Data']";
  static TEXTAREA = "textarea";
  static REFRESHTABLE = "#refreshtable";

  table;
  textarea;
  refreshtable;

  constructor(page) {
    this.page = page;
    this.table = page.locator(CreateTable.TABLEDATA);
    this.textarea = page.locator(CreateTable.TEXTAREA);
    this.refreshtable = page.locator(CreateTable.REFRESHTABLE);
  }

  async tableCreation() {
    await this.table.click();
  }

  async dataParse() {
    await this.textarea.fill(JSON.stringify(data, null, 2));

    await this.refreshtable.click();
  }
}
