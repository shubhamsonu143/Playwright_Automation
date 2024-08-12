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
        this.RegContinue ="//div[@class='buttons mb-4']"
        this.SearchBox = "(//input[@name='search'])[1]";

    }

    
        


       
}



module.exports=RegisterPage;