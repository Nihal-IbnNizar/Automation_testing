import CommonClass from "./CommonClass";
import homePage from "./HomePage";

class LoginPage extends CommonClass {
    constructor() {
        super();

        this.$logo = () => $(`//div[@class='login_logo']`)

        //Locators for Login credentials
        this.$loginUsername = () => $(`//input[@id='user-name']`)
        this.$loginPassword = () => $(`//input[@id='password']`)
        this.$loginButton = () => $(`//input[@id='login-button']`)
    }

    /**
     * Enter login credentials
     * @param {string} username 
     * @param {string} password 
     */
    login = async(username,password)=> {
        await this.$loginUsername().setValue(username);
        await this.$loginPassword().setValue(password);
        await this.$loginButton().click();

        await homePage.$productHeader().waitForDisplayed({ timeout: 3000 });
    }
}

export default new LoginPage();