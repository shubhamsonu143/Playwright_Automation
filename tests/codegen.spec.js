import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
  await page.goto('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
  await page.getByText('Table Data').click();
  await page.locator('#jsondata').click();
  await page.locator('#jsondata').dblclick();
  await page.locator('#jsondata').press('ControlOrMeta+a');
  await page.locator('#jsondata').fill('[{"name" : "Bob", "age" : 20,"gender":"male"}, {"name": "George", "age" : 42,"gender":"male"} , {"name" : "Sara", "age" : 42,"gender":"female"},{"name" : "Conor", "age" : 40,"gender":"male"},{"name" : "Jenifer", "age" : 42,"gender":"female"}]');
  await page.getByRole('button', { name: 'Refresh Table' }).click();

  const table = await page.$('#dynamictable');
  const tableText = await table.evaluate(el => el.innerText);
  console.log('Inner Text of the Table:', tableText);

  const tableRows = await page.$$('#dynamictable tbody tr'); // Select rows correctly
  console.log('Number of rows found:', tableRows.length);

  let retrievedData = [];

  for (let i = 0; i < tableRows.length; i++) {
    const cells = await tableRows[i].$$('td');
    if (cells.length >= 3) {
      const rowData = {
        name: (await cells[0].textContent())?.trim() || '',
        age: (await cells[1].textContent())?.trim() || '',
        gender: (await cells[2].textContent())?.trim().toLowerCase() || ''
      };
      retrievedData.push(rowData);
    }
  }

  console.log('Retrieved Data:', retrievedData);
});
