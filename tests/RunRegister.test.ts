import {test } from '@playwright/test'
import PreExecution from './Pre_Executions'

test('Demo',async({page},testInfo)=>{
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot',
      { body:screenshot,contentType:'image/png'});
      
  
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/register');

  // const RegisterationPage = new RegisterPage(page);

  // const RegisterationPage = new RegisterPage(page);

  const preExecute = new PreExecution(page);

  await preExecute.RegistrationPage();

  await preExecute.LogintothePage();
})