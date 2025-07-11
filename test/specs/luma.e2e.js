import data from '../TestData/lumaData.json' with {type: 'json'};
import homePage from '../pageobjects/Magento Luma/HomePage';
import loginPage from '../pageobjects/Magento Luma/LoginPage';
import mensCategory from '../pageobjects/Magento Luma/MensCategory';
import topsPage from '../pageobjects/Magento Luma/TopsPage';
import productPage from '../pageobjects/Magento Luma/ProductPage';
import cartPage from '../pageobjects/Magento Luma/CartPage';
import checkoutPage from '../pageobjects/Magento Luma/CheckoutPage';
import successPage from '../pageobjects/Magento Luma/SuccessPage';

describe('Magento Luma e2e Automation', () => {
    it('should launch the application succesfully', async () => {
        await homePage.open(data.homeUrl);
        expect(await homePage.$title()).toBeDisplayed();
    });

    // it('should register a new user by filling valid details',async () => {
    //     await (homePage.$createAccount()).click();
    //     expect (await createUser.$title()).toBeDisplayed();

    //     await createUser.fillData();
    //     expect (await userProfile.$myAccount()).toBeDisplayed();
    // })

    it('should validate if the login page is loaded successfully', async () => {
        await (homePage.$signIn()).click();
        expect(await loginPage.$title()).toBeDisplayed();
    });

    it('should login with valid credentials', async () => {
        await loginPage.login(data.loginUser);
        expect(await homePage.$title()).toBeDisplayed();
    });

    it('should navigate to mens page', async () => {
        await homePage.$mensCategory().click();
        expect(await mensCategory.$title()).toBeDisplayed();
    });

    it('should navigate tops category', async () => {
        await (mensCategory.$topsCategory()).click();
        expect(await topsPage.$title()).toBeDisplayed();
    });

    it('should sort the products by price', async () => {
        await topsPage.filter();
        expect(await topsPage.$title()).toBeDisplayed();
    });

    it('should select a product and navigate to product page', async () => {
        await (topsPage.$productImg(data.product)).click();
        expect(await productPage.$title()).toBeDisplayed();
    });

    it('should validate the name of the product', async () => {
        const prodName = await (productPage.$title(data.product)).getText();
        expect(prodName).toBe(data.product);
    });

    it('should add the product to cart', async () => {
        await productPage.addToCart();
        expect(await productPage.$addToCartSuccessMsg()).toBeDisplayed();
    });

    it('should update the quantity of the product', async () => {
        await productPage.updateQty();
        expect(await productPage.$title()).toBeDisplayed();
    });

    it('should navigate to the cart page', async () => {
        await productPage.viewCart();
        expect(await cartPage.$title()).toBeDisplayed();
    });

    it('should validate the product name', async () => {
        const prod = await (cartPage.$productName()).getText();
        expect(prod).toBe(data.product);
    });

    // it('should validate the quantity of the product',async () => {
    //     const prod= await (cartPage.$productName()).getText();
    //     expect (prod).toBe(data.product);
    // });

    it('should navigate to checkout page', async () => {
        await (cartPage.$checkoutBtn()).click();
        expect(await checkoutPage.$title()).toBeDisplayed();
    });

    it('should fill in the shipping form', async () => {
        await checkoutPage.fillForm(data.demoUser);
        expect(await checkoutPage.$placeOrderBtn()).toBeDisplayed();
    });

    it('should place the order and success message displayed', async () => {
        await checkoutPage.$placeOrderBtn().click();
        expect(await successPage.$title()).toBeDisplayed();
    });


})