
const RegisterPage = require("../Pages/Registerpage");

class LoginPage extends RegisterPage
{

    constructor (page)

    {
            super(page)
            this.page=page;
        this.Email = "[id='input-email']";
        this.Password= "#input-password";
        this.LoginButton = '//input[@class="btn btn-primary"]';
        this.SearchBox = "(//input[@name='search'])[1]";
        this.SelectProduct = "(//li[@class='product-thumb px-3 py-2 m-0 image-left'])[1]";

    }

    



}

module.exports = LoginPage;

