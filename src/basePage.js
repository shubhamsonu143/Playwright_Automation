import { Page, expect } from "@playwright/test";

export default class BasePage {
  constructor(page) {
    this.page = page; // Initialize the page instance from the constructor
  }

  async navigateToPage() {
    const response = await this.page.goto(
      "https://testpages.herokuapp.com/styled/tag/dynamic-table.html",
      { waitUntil: "load" }
    );

    const currentUrl = this.page.url(); // Fix the variable name to currentUrl

    console.log('Current URL:', currentUrl);

    const errorMessage = `Status code received: ${response.status()}\nExpected URL: ${currentUrl}`;

    // Check the response status
    await expect(response.status()).toEqual(200);

    // Check the current URL
    await expect(currentUrl).toBe("https://testpages.herokuapp.com/styled/tag/dynamic-table.html");
  }
}
