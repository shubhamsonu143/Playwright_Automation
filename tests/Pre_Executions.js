const LoginPage = require("../Pages/Loginpage"),
testaData = require("../testdata.json"),
json = JSON.parse(JSON.stringify(testaData));

class Pre_Execution extends LoginPage {

    constructor(page){
        super(page)
        this.page=page;
    }
async RegistrationPage()
    {
        await this.page.fill(this.Firstname,json.Fname)
        await this.page.fill(this.Lastname,json.Lname)
        await this.page.fill(this.Email,json.emailID)
        await this.page.fill(this.Phone,json.phoneNum)
        await this.page.fill(this.Password,json.pass)
        await this.page.fill(this.Confirmpassword,json.cPass)
        await this.page.click(this.checkbox)
        await this.page.click(this.Continue)

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

            await this.page.fill(this.Email,json.loginEmail)
            await this.page.fill(this.Password,json.loginPass)
            await this.page.click(this.LoginButton)
            await this.page.fill(this.SearchBox,json.searchproduct)
            await this.page.click(this.searchBtn)
            await this.page.click(this.ClickSamsung)
            await this.page.click(this.AddCart )
            await this.page.click(this.CartIcon )
            await this.page.locator(this.Checkout).waitFor({ state: 'visible' });
            await this.page.click(this.Checkout)

        
        }
        
    }

    module.exports = Pre_Execution;