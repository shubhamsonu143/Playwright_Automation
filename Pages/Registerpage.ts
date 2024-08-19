import { Page } from "@playwright/test";
export default class RegisterPage
{   
    page:Page
    constructor(page:Page)
    {
        this.page=page
        
    }
    RegisterFirstname =()=> this.page.locator('#input-firstname')
    RegisterLastname  =()=> this.page.locator('#input-lastname')
    RegisterEmail  =()=> this.page.locator('#input-email')
    RegisterPhone  =()=> this.page.locator('#input-telephone')
    RegisterPassword  =()=> this.page.locator('#input-password')
    RegisterConfirmpassword  =()=> this.page.locator("[id='input-confirm']")
    Registercheckbox  =()=> this.page.locator("[class='custom-control custom-checkbox custom-control-inline']")
    RegisterContinue  =()=> this.page.locator("[class='btn btn-primary']")


       
}