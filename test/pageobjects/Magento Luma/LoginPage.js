import CommonClass from "./CommonClass";

class LoginPage extends CommonClass {
    constructor() {
        super();

        this.$title = () => $(`//span[text()='Customer Login']`);
        this.$email = () => $(`//input[@title='Email']`);
        this.$password = () => $(`//input[@title='Password']`);
        this.$signInBtn = () => $(`//button[@class='action login primary']`);
    }

    /**
     * 
     * @param {string} user 
     */
    login = async (user) => {
        await this.$email().setValue(user.email);
        await this.$password().setValue(user.password);
        await this.$signInBtn().click();
    }
}
export default new LoginPage();