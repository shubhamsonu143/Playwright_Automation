import LoginPage from '../Pages/Loginpage'
import testData from '../testdata.json'

export default class Pre_Execution extends LoginPage {

    
    constructor(page){
        super(page)
        this.page=page;
    }
async RegistrationPage()
    {
        const login = new LoginPage(this.page);
        

        await login.RegisterFirstname().fill(testData.Fname);
        await login.RegisterLastname().fill(testData.Lname)
        await login.RegisterEmail().fill(testData.emailID)
        await login.RegisterPhone().fill(testData.phoneNum)
        await login.RegisterPassword().fill(testData.pass)
        await login.RegisterConfirmpassword().fill(testData.cPass)
        await login.Registercheckbox().click()
        await login.RegisterContinue().click()




        try{

            const element1 = "[class='alert alert-danger alert-dismissible']";

            
            if(element1){

                console.log("Email Already Exist");
                
            
            try {

                const element2 = await this.page.$("(//a[@class='list-group-item'])[1]");

                // const clicklogin = await this.page.$(element2);                

                if(element2) {

                    console.log("Redirected to Login Page");

                    await element2.click();
                    

                } else {

                console.log("Redirection Failed");

                }
                }catch (error) {

                console.log("Error element not found");

                }
            }

        } catch (error) {

                console.log("Error main element not found");


            }
        }   
        
        async LogintothePage(){

            const login = new LoginPage(this.page);

            await login.LoginEmail().fill(testData.emailID)
            await login.LoginPassword().fill(testData.pass)
            await login.LoginButton().click()
            await login.LoginSearchBox().fill(testData.searchproduct)
            await login.LoginsearchBtn().click()
            await login.LoginClickSamsung().click()
            await login.LoginAddCart().click()
            await this.page.waitForTimeout(3000);
            await login.LoginCartIcon().click()
            await login.LoginCheckout().click()
            await this.page.screenshot({path: 'cart.png'});
            await login.LoginNewAdress().click()
            await login.LoginFirstname1().fill(testData.Fname1)
            await login.LoginLastname1().fill(testData.Lname1)
            await login.Logincompany().fill(testData.company)
            await login.LoginAddress1().fill(testData.address1)
            // await this.page.evaluate(() => {
            //     window.scrollBy(0, 500);});
            await login.Logincity().scrollIntoViewIfNeeded();
            await login.Logincity().fill(testData.city)
            await login.LoginPostcode().fill(testData.postCode)
            await login.LoginCountry().selectOption(testData.Country)        
            await login.LoginRegion().selectOption(testData.Region)
            await login.LoginTermsandCondition().click()
            await this.page.screenshot({path: 'Terms.png'});
            await login.Loginsubmit().click() 
            await this.page.screenshot({path: 'submit.png'});
            await login.LoginConfirmorder().click() 
            await this.page.screenshot({path: 'confirm.png'});
            await login.LoginfinalContinue().click() 
            
          
    
            
            }
       
    }

