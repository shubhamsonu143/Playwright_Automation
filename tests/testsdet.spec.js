const { chromium } = require('playwright');
const assert = require('assert');
import { test, expect } from '@playwright/test';

// (async () => {
//   // Step 1: Launch the browser and navigate to the given URL
//   const browser = await chromium.launch({ headless: false }); // set headless: false to see browser interaction
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');

  test('basic test', async ({ page }) => {
    await page.goto('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
    // const title = await page.title();
    // expect(title).toBe('Example Domain');
 

  // Step 2: Click on the 'Table Data' button to display the input text box
  await page.click("//summary[text()='Table Data']");

  // Store data to be entered
  const data = [{"name" : "Bob", "age" : 20,"gender":"male"}, {"name": "George", "age" : 42,"gender":"male"} , {"name" : "Sara", "age" : 42,"gender":"female"},{"name" : "Conor", "age" : 40,"gender":"male"},{"name" : "Jenifer", "age" : 42,"gender":"female"}];

  // Step 3: Insert the data into the input text box and click Refresh Table
  await page.fill('textarea', JSON.stringify(data, null, 2)); // Use 'textarea' to select the input field
  await page.click('#refreshtable');

  // Step 4: Verify that the data is populated in the table
  const tableRows = await page.waitForSelector("//table[@id='dynamictable']");
  console.log('Number of rows found:', tableRows.length);

  // Initialize an array to hold table data
  let populatedData = [];

  for (const row of tableRows) {
    const cells = await row.$$('td'); // Select 'td' for data cells, not 'th'
  
    if (cells.length >= 3) { // Ensure there are at least 3 cells
      const rowData = {
        name: (await cells[0].textContent())?.trim() || '', // Handle possible null values
        age: parseInt((await cells[1].textContent()) || '0', 10), // Default to 0 if no value
        gender: (await cells[2].textContent())?.trim().toLowerCase() || '' // Handle possible null values
      };
      populatedData.push(rowData);
    }
  }
  console.log('Populated Data:', populatedData);
console.log('Expected Data:', data);
  // Step 5: Assert that the stored data matches the data in the UI table
  assert.deepStrictEqual(populatedData, data, "The data in the table does not match the inserted data.");
});