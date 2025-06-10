import data from '../TestData/advanceDemoShopping.json' with {type:'json'};
import homePage from '../pageobjects/AdvanceDemoShopping/HomePage';
import loginModal from '../pageobjects/AdvanceDemoShopping/LoginModal';
import registrationPage from '../pageobjects/AdvanceDemoShopping/RegistrationPage';

describe('Advance Demo Shopping Website',()=>{
    it('should launch the website successfully',async () => {
        await homePage.open(data.homeUrl);
        await expect(homePage.$speakers()).toBeDisplayed();
    })

    it('should register a new user successfully', async () => {
        await homePage.$loginIcon().click();
        await loginModal.$createAccount().click();
        await registrationPage.register(data.newUser);
        await browser.pause(5000);
    })

    // it('should login with the registered user',async () => {
    //     await homePage.$loginIcon().click();
    //     await loginModal.login(data.newUser);
    //     await expect(homePage.$loggedInUser()).toHaveText(data.newUser.username);
    // })
})