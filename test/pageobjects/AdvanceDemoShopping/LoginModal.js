import CommonClass from "./CommonClass";
import homePage from "./HomePage";

class LoginModal extends CommonClass{
    constructor(){
        super();
        this.$username = () => $(`//input[@name='username']`);
        this.$password = () => $(`//input[@name='password']`);
        this.$checkBox = () => $(`//input[@name='remember_me']`);
        this.$loginBtn = () => $(`#sign_in_btn`);

        this.$createAccount = () => $(`//a[text()='CREATE NEW ACCOUNT']`);
    }

    login = async (user) => {
        await this.$username().setValue(user.username);
        await this.$password().setValue(user.password);
        await this.$checkBox().click();
        await this.$loginBtn().click();
    }
}

export default new LoginModal();