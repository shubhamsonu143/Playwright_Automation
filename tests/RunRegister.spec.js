const { test, expect } = require('@playwright/test'),
Pre_Execution = require("../tests/Pre_Executions");

test('Register Page Using POM', async ({ page },testInfo) => {

    const screenshot = await page.screenshot();
      await testInfo.attach('screenshot',
        { body:screenshot,contentType:'image/png'});
        
    
      await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    // const RegisterationPage = new RegisterPage(page);

    // const RegisterationPage = new RegisterPage(page);

    const preExecute = new Pre_Execution(page);

    await preExecute.RegistrationPage();

    await preExecute.LogintothePage();

    

});