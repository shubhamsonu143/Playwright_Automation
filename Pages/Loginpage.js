
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
        this.searchbutton = "//button[@class='type-text']"
        this.SelectProduct = "(//div[@class='carousel-item active'])[2]";
        this.AddtoCart = "(//button[@class='text btn btn-md btn-secondary btn-block btn-cart button-cart cart-66'])[2]";
        this.ViewCart = "//a[@class='btn btn-primary btn-block']";
        this.Checkout = "//a[@class='btn btn-lg btn-primary']"
        this.AddAdress= "(//label[@class='custom-control-label'])[2]"
        this.AddFname = "//input[@name='firstname']"
        this.AddLname = "//input[@name='lastname']"
        this.Address1 ="//input[@name='address_1']"
        this.Address2  = "//input[@name='address_2']"
        this.City = "//input[@name='city']"
        this.Pincode = "//input[@name='postcode']"
        this.Country ="//select[@id='input-payment-country']"
        this.Region = "//select[@id='input-payment-zone']"
        this.FinalCheckBox ="(//label[text()='I have read and agree to the '])[2]"
        this.FinalContinue ="//button[@id='button-save']"
        this.ConfirmOrder = "//button[@id='button-confirm']"
        this.Done ="//div[@class='buttons mb-4']"



    }

    



}

module.exports = LoginPage;

