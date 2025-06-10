import CommonClass from "./CommonClass";

class RegistrationPage extends CommonClass {
    constructor() {
        super();

        //Account Details
        this.$username = () => $(`//input[@name='usernameRegisterPage']`);
        this.$email = () => $(`//input[@name='emailRegisterPage']`);
        this.$password = () => $(`//input[@name='passwordRegisterPage']`);
        this.$confirmPassword = () => $(`//input[@name='confirm_passwordRegisterPage']`);

        //Personal Details
        this.$firstName = () => $(`//input[@name='first_nameRegisterPage']`);
        this.$lastName = () => $(`//input[@name='last_nameRegisterPage']`);
        this.$phoneNumber = () => $(`//input[@name='phone_numberRegisterPage']`);

        //Address
        this.$country = () => $(`//select[@name='countryListboxRegisterPage']`);
        this.$city = () => $(`//input[@name='cityRegisterPage']`);
        this.$address = () => $(`//input[@name='addressRegisterPage']`);
        this.$state = () => $(`//input[@name='state_/_province_/_regionRegisterPage']`);
        this.$postalCode = () => $(`//input[@name='postal_codeRegisterPage']`);

        this.$agreeCheck = () => $(`//input[@name='i_agree']`);
        this.$registerBtn = () => $(`#register_btn`);

    }

    /**
     * 
     * @param {*} user 
     */
    register = async (user) => {
        await this.$username().setValue(user.username);
        await this.$email().setValue(user.email);
        await this.$password().setValue(user.password);
        await this.$confirmPassword().setValue(user.confirmPassword);
        await this.$firstName().setValue(user.firstName);
        await this.$lastName().setValue(user.lastName);
        await this.$phoneNumber().setValue(user.phone);
        await this.$country().selectByVisibleText(user.country); //for selecting items from a list
        await this.$city().setValue(user.city);
        await this.$address().setValue(user.address);
        await this.$state().setValue(user.state);
        await this.$postalCode().setValue(user.postalCode);
        await this.$agreeCheck().click();
        await this.$registerBtn().click();
    };

}

export default new RegistrationPage();