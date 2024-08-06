class RegisterPage
{
    constructor(page)
    {
        this.page=page
        this.Firstname="#input-firstname"
        this.Lastname="#input-lastname"
        this.Email="#input-email"
        this.Phone="#input-telephone"
        this.Password="#input-password"
        this.Confirmpassword="[id='input-confirm']"
        this.checkbox="[class='custom-control custom-checkbox custom-control-inline']"
        this.Continue="[class='btn btn-primary']"
    }

    async RegistrationPage()
    {
        await this.page.fill(this.Firstname,"Shubham")
        await this.page.fill(this.Lastname,"Rajendra")
        await this.page.fill(this.Email,"shubham050396@gmail.com")
        await this.page.fill(this.Phone,"8508888860")
        await this.page.fill(this.Password,"Shubham@143")
        await this.page.fill(this.Confirmpassword,"Shubham@143")
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

        


       
}



module.exports=RegisterPage;