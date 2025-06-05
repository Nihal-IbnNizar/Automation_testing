import data from '../TestData/swagLabsTestdata.json' with {type: 'json'};
import loginPage from '../pageobjects/SwagLabs/LoginPage';
import homePage from '../pageobjects/SwagLabs/HomePage';
import cartPage from '../pageobjects/SwagLabs/CartPage';
import checkout from '../pageobjects/SwagLabs/Checkout';
import checkoutConfirmation from '../pageobjects/SwagLabs/CheckoutConfirmation';

describe("Swag Labs Website e2e automation", () => {

    it('should launch the application successfully', async () => {
        await loginPage.open(data.loginUrl);
        await expect(loginPage.$logo()).toBeDisplayed();
    })

    it('should login with valid credentials', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(homePage.$logo()).toBeDisplayed();
    })

    it('should validate if the homepage is loaded successfully', async () => {
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toBe(data.homeUrl);
        await expect(homePage.$productHeader()).toBeDisplayed();
    })

    const prod1 = "Sauce Labs Backpack";
    const prod2 = "Sauce Labs Bolt T-Shirt";
    const prod3 = "Sauce Labs Fleece Jacket";
    let price1, price2, price3, cartPrice1, cartPrice3;

    it('should add a product to the cart', async () => {
        await homePage.addToCart(prod1);
        price1 = await (homePage.getProductPrice(prod1));
        await expect(homePage.$cartBadge()).toHaveText('1');
        await expect(homePage.$removeBtn(prod1)).toBeDisplayed();
    })

    it('should add second product to the cart', async () => {
        await homePage.addToCart(prod2);
        price2 = await (homePage.getProductPrice(prod2));
        await expect(homePage.$cartBadge()).toHaveText('2');
        await expect(homePage.$removeBtn(prod2)).toBeDisplayed();
    })

    it('should add third product to the cart', async () => {
        await homePage.addToCart(prod3);
        price3 = await (homePage.getProductPrice(prod3));
        await expect(homePage.$cartBadge()).toHaveText('3');
        await expect(homePage.$removeBtn(prod3)).toBeDisplayed();
    })

    it('should remove second product from the cart', async () => {
        await homePage.$removeBtn(prod2).click();
        await expect(homePage.$cartBadge()).toHaveText('2');
        await expect(homePage.$addToCartBtn(prod2)).toBeDisplayed();
    })

    it('should validate if cart page is loaded successfully', async () => {
        await (homePage.$cartBadge()).click();
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toBe(data.cartUrl);
        await expect(cartPage.$title()).toBeDisplayed();
    })

    it('should validate if the product details is correct in the cart', async () => {
        cartPrice1 = await cartPage.$cartProductPrice(prod1).getText();
        await expect(cartPrice1).toBe(price1);
        await expect(cartPage.$cartProductName(prod1)).toBeDisplayed();

        cartPrice3 = await cartPage.$cartProductPrice(prod3).getText();
        await expect(cartPrice3).toBe(price3);
        await expect(cartPage.$cartProductName(prod3)).toBeDisplayed();

        const isProd2Displayed = await cartPage.$cartProductName(prod2).isExisting();
        await expect(isProd2Displayed).toBe(false);
    })

    it('should checkout of the page', async () => {
        await cartPage.checkout();
        await expect(checkout.$title()).toBeDisplayed();
    })

    it('should fail on clicking continue without filling the form', async () => {
        await checkout.$continueBtn().click();
        await expect(checkout.$errorMsg()).toBeDisplayed();
    })

    it('should fill in the checkout form and submit', async () => {
        await checkout.fillForm();
        await expect(checkoutConfirmation.$title()).toBeDisplayed();
    })

    it('should if the total price matches the summed of the products', async () => {
        const expectedTotal = parseFloat(price1.replace('$', '')) + parseFloat(price3.replace('$', ''));
        const summedPrice = await checkoutConfirmation.checkPrice();
        await expect(summedPrice).toBeCloseTo(expectedTotal, 2);
        await expect(checkoutConfirmation.$title()).toBeDisplayed();
    })

    it('should check if final confirmation message is shown and order is completed', async () => {
        
        await checkoutConfirmation.$finishBtn().click();
        
        await expect (checkoutConfirmation.$confirmTitle()).toBeDisplayed();
        await expect (checkoutConfirmation.$thankyouMsg()).toBeDisplayed();

        await checkoutConfirmation.$homeBtn().click();
        await expect (homePage.$logo()).toBeDisplayed();

    })
})