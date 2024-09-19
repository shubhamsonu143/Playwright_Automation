const LoginPage = require("../Pages/Loginpage");
const RegisterPage = require("../Pages/Registerpage");
const testaData = require("../testdata.json");
const json = JSON.parse(JSON.stringify(testaData));

class Pre_Execution extends LoginPage {

    constructor(page) {
        super(page);
        this.page = page;
    }

    async RegistrationPage()
    {
        await this.page.fill(this.Firstname, json.Fname);
        await this.page.fill(this.Lastname, json.Lname);
        await this.page.fill(this.Email, json.emailID);
        await this.page.fill(this.Phone, json.phoneNum);
        await this.page.fill(this.Password, json.pass);
        await this.page.fill(this.Confirmpassword, json.cPass);
        await this.page.click(this.checkbox);
        await this.page.click(this.Continue);

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
       
  
        

    async LogintothePage() {
        
                await this.page.fill(this.Email, json.loginEmail);
                await this.page.fill(this.Password, json.loginPass);
                await this.page.click(this.LoginButton);
                await this.page.type(this.SearchBox, json.searchproduct);
                await this.page.click(this.searchbutton);
                await this.page.click(this.SelectProduct, { state: 'visible' });
                await this.page.click(this.AddtoCart);
                await this.page.click(this.ViewCart);
                await this.page.click(this.Checkout);
                await this.page.click(this.AddAdress);
                await this.page.fill(this.AddFname ,json.AddressFname);
                await this.page.fill(this.AddLname,json.AddressLname);
                await this.page.fill(this.Address1,json.Address1);
                await this.page.fill(this.Address2,json.Address2);
                await this.page.fill(this.City,json.city);
                await this.page.fill(this.Pincode,json.pincode);               
                await this.page.selectOption(this.Country,json.country);
                await this.page.selectOption(this.Region,json.region);
                await this.page.click(this.FinalCheckBox);
                await this.page.click(this.FinalContinue);
                await this.page.click(this.ConfirmOrder);
                await this.page.click(this.Done);
            

           
    }
}

module.exports = Pre_Execution;
