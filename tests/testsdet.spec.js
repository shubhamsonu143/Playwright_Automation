const { chromium } = require("playwright");
const assert = require("assert");
import { test, expect } from "@playwright/test";
import BasePage from "../src/basePage";
import CreateTable from '../src/createTable'
import data from '../data.json'

test("basic test", async ({ page }) => {

  // Step 1: Launch the browser and navigate to the given URL
  const basePage = new BasePage(page);
  await basePage.navigateToPage();


  // Step 2: Click on the 'Table Data' button to display the input text box
  const createTable = new CreateTable(page);

  await createTable.tableCreation();

  // step:3 Parse the data to the table

  await createTable.dataParse();
  

  // Step 4: Verify that the data is populated in the table
  await page.waitForSelector("#dynamictable");
  const tableRows = await page.$$("div#tablehere table tr");
  console.log("Number of rows found:", tableRows.length);

  // Initialize an array to hold table data
  let populatedData = [];

  for (const row of tableRows) {
    const cells = await row.$$("td"); // Select 'td' for data cells, not 'th'

    if (cells.length >= 3) {
      // Ensure there are at least 3 cells
      const rowData = {
        name: (await cells[0].textContent())?.trim() || "", // Handle possible null values
        age: parseInt((await cells[1].textContent()) || "0", 10), // Default to 0 if no value
        gender: (await cells[2].textContent())?.trim().toLowerCase() || "", // Handle possible null values
      };
      populatedData.push(rowData);
    }
  }
  console.log("Populated Data:", populatedData);
  console.log("Expected Data:", data);
  // Step 5: Assert that the stored data matches the data in the UI table
  assert.deepStrictEqual(
    populatedData,
    data.data,
    "The data in the table does not match the inserted data."
  );
});
