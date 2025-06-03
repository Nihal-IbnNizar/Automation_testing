import { $ } from '@wdio/globals'
import CommonClass from './commonClass';

class LoginPage extends CommonClass {
    constructor()
    {
        super();
            this.$loginUsername=()=>$(`//input[@id="loginusername"]`)
            this.$loginPassword=()=>$(`//input[@id="loginpassword"]`)
            this.$loginButton=()=>$(`//button[text()="Log in"]`)
    }
    login = async (username, password) => {
        await this.$navBar('Log in').click();
        await browser.pause(500);
        await this.$loginUsername().setValue(username);
        await this.$loginPassword().setValue(password);
        await this.$loginButton().click();
        // await browser.pause(1000);
    }
}
export default new LoginPage();
