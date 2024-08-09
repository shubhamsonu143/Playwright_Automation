
// const RegisterPage = require("../Pages/Registerpage");

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
        this.searchBtn = "//button[text()='Search']";
       // this.MegaMenu = "//a[@class ='icon-left both nav-link dropdown-toggle active']";
        this.ClickSamsung = "(//a[text()='Samsung SyncMaster 941BW'])[2]";
        this.AddCart = "(//button[text()='Add to Cart'])[2]";
        this.CartIcon = "[id = 'entry_217825']";
        this.Checkout = "[id = 'entry_217851']"
        this.Firstname1 = "#input-payment-firstname";
        this.Lastname1 = "#input-payment-lastname";
        this.company = "#input-payment-company";
        this.Address1 ="#input-payment-address-1";
        this.city = "input-payment-city";
        this.Postcode = "#input-payment-postcode";
        this.Country = "#input-payment-country";
        this.Region = "#input-payment-zone";
        this.TermsandCondition ="#input-agree";
        this.submit = "#button-save";

    }

    



}

module.exports = LoginPage;

