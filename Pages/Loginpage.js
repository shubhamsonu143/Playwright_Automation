class LoginPage 
{

    constructor (page)
    
    {
        this.page=page
        this.Email = "[id='input-email']";
        this.Password= "#input-password";
        this.LoginButton = '//input[@class="btn btn-primary"]';

    }

    async LoginToThePage()
    {
        await this.page.fill(this.Email,"shubham050396@gmail.com");
        await this.page.fill(this.Password,"Shubham@143");
        await this.page.click(this.LoginButton);
    }

}

module.exports = LoginPage;

