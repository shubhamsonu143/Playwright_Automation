const { test, expect } = require('@playwright/test');
// const RegisterPage = require("../Pages/Registerpage");
// const LoginPage = require("../Pages/Loginpage");
const Pre_Execution = require("../tests/Pre_Executions");
const json = JSON.parse(JSON.stringify(require("../testdata.json")));

test('Register Page Using POM', async ({ page },testInfo) => {

    const screenshot = await page.screenshot();
      await testInfo.attach('screenshot',
        { body:screenshot,contentType:'image/png'});
        
    
      await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    // const RegisterationPage = new RegisterPage(page);

    // const RegisterationPage = new RegisterPage(page);

    const RegisterationPage = new Pre_Execution(page);

    await RegisterationPage.RegistrationPage();

    const Loginscreen = new Pre_Execution(page);

    await Loginscreen.LogintothePage();

    

});