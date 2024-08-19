import { Page } from '@playwright/test';
import RegisterPage from '../Pages/Registerpage'

export default class LoginPage extends RegisterPage
{
    static Firstname(Firstname: any, Fname: string) {
        throw new Error('Method not implemented.');
    }

    page:Page
    constructor(page:Page)
    {
        super(page)
        this.page=page
        
    }
   
    LoginEmail =()=> this.page.locator("[id='input-email']")
    LoginPassword =()=> this.page.locator("#input-password")
    LoginButton =()=> this.page.locator('//input[@class="btn btn-primary"]')
    LoginSearchBox =()=> this.page.locator("(//input[@name='search'])[1]")
    LoginSelectProduct =()=> this.page.locator("(//li[@class='product-thumb px-3 py-2 m-0 image-left'])[1]")
    LoginsearchBtn =()=> this.page.locator("//button[text()='Search']")
    LoginClickSamsung =()=> this.page.locator("(//a[text()='Samsung SyncMaster 941BW'])[2]")
    LoginAddCart =()=> this.page.locator("(//button[text()='Add to Cart'])[2]")
    LoginCartIcon =()=> this.page.locator("#entry_217825")
    LoginCheckout =()=> this.page.locator("#entry_217851")
    LoginNewAdress =()=> this.page.locator("(//div[@class ='custom-control custom-radio'])[2]")
    LoginFirstname1 =()=> this.page.locator("#input-payment-firstname")
    LoginLastname1 =()=> this.page.locator("#input-payment-lastname")
    Logincompany =()=> this.page.locator("#input-payment-company")
    LoginAddress1 =()=> this.page.locator("#input-payment-address-1")
    Logincity =()=> this.page.locator("#input-payment-city")
    LoginPostcode =()=> this.page.locator("#input-payment-postcode")
    LoginCountry =()=> this.page.locator("#input-payment-country")
    LoginRegion =()=> this.page.locator("#input-payment-zone")
    LoginTermsandCondition =()=> this.page.locator("(//label[text()='I have read and agree to the '])[2]")
    Loginsubmit =()=> this.page.locator("#button-save")
    LoginConfirmorder =()=> this.page.locator("#button-confirm")
    LoginfinalContinue =()=> this.page.locator("//a[text()='Continue']");

   
    


    

        
      
    
      
      
       
       // this.MegaMenu = "//a[@class ='icon-left both nav-link dropdown-toggle active']";
       
       
       
       
       
       
      
        
    
    
       
      
        


    



}



