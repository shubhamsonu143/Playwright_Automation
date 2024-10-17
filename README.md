Project Overview
This project is an automated testing framework using Playwright for an e-commerce platform. It leverages the Page Object Model (POM) pattern to separate the test logic from the page interactions and improves maintainability.
 
1. Environment Setup
Node.js Installation: Ensure Node.js is installed on your machine.
Install Playwright: Use the following command to install Playwright:
 
* npm install playwright
 
2. Page Object Model (POM)
RegisterPage.js: This file defines the locators for the registration fields, such as first name, last name, email, phone, and password. It serves as the base for the registration functionality.
LoginPage.js: This file extends RegisterPage.js and adds locators for login and product-related actions such as searching and adding to the cart.
3. Test Execution Logic
Pre_Execution.js: This file manages the registration and login workflows:
The RegistrationPage() method fills out the registration form using data from testdata.json.
It checks if the email already exists and attempts to redirect to the login page if it does.
The LogintothePage() method handles the login process, searches for a product, adds it to the cart, and completes the checkout process.
4. Test Data Management
testdata.json: This file contains the test data necessary for the registration and login processes, allowing easy updates without modifying the code logic.
5. Running the Tests
Test Execution: To run the automated test, execute the following command:
 
* npx playwright test
This command will initiate the test specified in Pre_Execution.spec.js, which encompasses both the registration and login flows.
