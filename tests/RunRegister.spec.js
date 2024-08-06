const { test, expect } = require('@playwright/test');
const RegisterPage = require("../Pages/Registerpage")
const LoginPage = require("../Pages/Loginpage")


test('Register Page Using POM', async ({ page },testInfo) => {

    const screenshot = await page.screenshot();
      await testInfo.attach('screenshot',
        { body:screenshot,contentType:'image/png'});
        
    
      await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

    // const RegisterationPage = new RegisterPage(page);

    const RegisterationPage = new RegisterPage(page);

    await RegisterationPage.RegistrationPage();

    const Loginpage = new LoginPage(page);

    await Loginpage.LoginToThePage();

    

});