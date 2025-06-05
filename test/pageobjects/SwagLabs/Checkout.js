import CommonClass from "./CommonClass";

class Checkout extends CommonClass{
    constructor(){
        super();

        //Locators of the checkout page
        this.$title = () => $(`//span[text()='Checkout: Your Information']`);
        this.$firstName = () => $(`//input[@id='first-name']`);
        this.$lastName = () => $(`//input[@id='last-name']`);
        this.$postalCode = () => $(`//input[@id='postal-code']`);

        this.$continueBtn = () => $(`//input[@id='continue']`);
        this.$errorMsg = () => $(`//h3[@data-test='error']`);
    }

    /**
     * Fills the checkout form in the chekout page and clicks on the Continue button
     */
    fillForm = async () => {
        await this.$firstName().setValue("Nihal");
        await this.$lastName().setValue("Test");
        await this.$postalCode().setValue("123456");

        await this.$continueBtn().click();
    }
}

export default new Checkout();