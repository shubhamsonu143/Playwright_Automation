const LoginPage = require("../Pages/Loginpage");

const json = JSON.parse(JSON.stringify(require("../testdata.json")));

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

            await this.page.fill(this.Email,"shubham050396@gmail.com")
            await this.page.fill(this.Password,"Shubham@143")
            await this.page.click(this.LoginButton)
            await this.page.fill(this.SearchBox,"Samsung")
        
        }
        
    }

    module.exports = Pre_Execution;