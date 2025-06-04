import data from '../TestData/swagLabsTestdata.json' with {type: 'json'};
import loginPage from '../pageobjects/SwagLabs/LoginPage';
import homePage from '../pageobjects/SwagLabs/HomePage';

describe("Swag Labs Website e2e automation", ()=>{

    it('should launch the application successfully', async()=>{
        await loginPage.open(data.url);
        await expect(loginPage.$logo()).toBeDisplayed();
    })

    it('should login with valid credentials',async()=>{
        await loginPage.login('standard_user','secret_sauce');
        await expect(homePage.$logo()).toBeDisplayed();
    })
})