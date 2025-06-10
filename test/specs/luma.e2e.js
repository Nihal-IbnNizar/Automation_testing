import data from '../TestData/lumaData.json' with {type:'json'};
import homePage from '../pageobjects/MagentoLuma/HomePage';
import createUser from '../pageobjects/MagentoLuma/CreateUser';
import userProfile from '../pageobjects/MagentoLuma/UserProfile';
import mensCategory from '../pageobjects/MagentoLuma/menCat';
import productDetails from '../pageobjects/MagentoLuma/ProductDetails';
import cartPage from '../pageobjects/MagentoLuma/CartPage';

describe('Magento Luma Automation', () => {
    
    it('should launch the pplication using a valid URL',async () => {
        await homePage.open(data.homeUrl);
        expect(await homePage.$title()).toBeDisplayed();
    })

    it('should register a new user by filling valid details',async () => {
        await (homePage.$createAccount()).click();
        expect (await createUser.$title()).toBeDisplayed();

        await createUser.fillData();
        expect (await userProfile.$myAccount()).toBeDisplayed();
    })

    it('should navigate to mens category',async () => {
        await (userProfile.$mensCategory()).click();
        expect (await mensCategory.$title()).toBeDisplayed();
    });

    it('should display the details of the product',async () => {
        await (mensCategory.$productName(data.prod1)).click();
    });

    it('should validate if the same product details is displayed',async () => {
        const cartProdName= await (productDetails.$productName()).getText();
        expect(cartProdName).toBe(data.prod1);
    });

    it('should add a product to the cart',async () => {
        await (productDetails.addToCart());
        //expect (productDetails.$productName()).toBeDisplayed();
        await browser.pause(5000);
    });

    it('should click on view cart button and navigate to cart page',async () => {
        await (productDetails.$showCart()).click();
        await (productDetails.$viewCart()).click();
        expect (cartPage.$title()).toBeDisplayed();
        await browser.pause(5000);
    });
})