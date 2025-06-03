import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/DemoBlaze/login.page.js'
import homePage from '../pageobjects/DemoBlaze/demoblazeHome.js'
//import CommonClass from '../pageobjects/commonClass.js';
import productPage from '../pageobjects/DemoBlaze/productPage.js';

describe('Test homePage, Login and Navigation', () => {

    //const common = new CommonClass(); 
    // We should not create an object of the parent class. 
    // The parent class (CommonClass) is extended to the child class loginPage. 
    // So if we want to access anything from the parent class, use the child class itself (Since all the properties of the parent class is already inherited to the child class).

    it('validate the URL and login', async () => {
        await homePage.open('https://demoblaze.com/index.html');   //homePage has already inherited the properties from the parent class(CommonClass)
        await expect(homePage.$categories()).toBeDisplayed();
        await loginPage.login('test123546', 'test123546');
    });

    // it('should check all header buttons are visible', async () => {
    //     await loginPage.verifyHeaderButtonsVisible();
    // });

    it('should verify if the product is available and navigated to product page', async () => {
        if (homePage.$productSearch('Samsung galaxy s6')) {
            await expect(homePage.$productSearch('Samsung galaxy s6')).toBeDisplayed();
            await homePage.$productSearch('Samsung galaxy s6').click();
        }
        else {
            await expect(homePage.$categories);
        }
    });

    // it('should verify if the product is available and navigated to product page', async () => {
    //     const productName = 'Samsung galaxy s6';
    //     if (productName) {
    //         const productElement = homePage.$productSearch(productName);
    //         await expect(productElement).toBeDisplayed();
    //         await productElement.click();
    //     }
    //     else {
    //         await expect(homePage.$categories);
    //     }
    // });

    it('should verify if the product page is loaded', async () => {
        await productPage.isLoaded();
    })


    // it('should check product price', async () => {
    //     await homePage.$phoneSearch().click();
    //     const price = await homePage.$productPrice('Samsung galaxy s6').getText();

    //     console.log('Price:', price);
    //     expect(price).toMatch(/\$\d+/);
    // });
});
