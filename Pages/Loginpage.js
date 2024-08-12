
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
        this.sucesstag = "//a[@class='btn btn-primary']";
        this.SearchBox = "(//input[@name='search'])[1]";
        this.SelectProduct = "//ul[@class='dropdown-menu autocomplete w-100']/li[2]";
        this.AddtoCart = "(//button[@class='text btn btn-md btn-secondary btn-block btn-cart button-cart cart-66'])[2]";
        this.ViewCart = "//a[@class='btn btn-primary btn-block']";


    }

    



}

module.exports = LoginPage;

