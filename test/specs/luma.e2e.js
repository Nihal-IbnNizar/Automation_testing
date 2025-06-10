import data from '../TestData/lumaData.json' with {type:'json'};
import homePage from '../pageobjects/MagentoLuma/HomePage';
import createUser from '../pageobjects/MagentoLuma/CreateUser';
import userProfile from '../pageobjects/MagentoLuma/UserProfile';

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
})