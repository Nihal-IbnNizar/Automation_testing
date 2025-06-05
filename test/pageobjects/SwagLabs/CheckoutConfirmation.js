import CommonClass from "./CommonClass";

class CheckoutConfirmation extends CommonClass{
    constructor(){
        super();

        //Locators of the final confirmation page
        this.$title= ()=> $(`//span[@class='title']`);
        this.$totalPrice = () => $(`//div[@class='summary_subtotal_label']`);
        this.$finishBtn = () => $(`//button[@id='finish']`);

        //Locators of the purchase confirmation message page
        this.$confirmTitle = () => $(`//span[text()='Checkout: Complete!']`);
        this.$thankyouMsg = () => $(`//h2[text()='Thank you for your order!']`);
        this.$homeBtn = () => $(`//button[@id='back-to-products']`);
    }

    /**
     * Checks if the total price of the product matches the sum of the price of the products
     * @returns the total price from the confirmation page
     */
    checkPrice = async () => {
        const text = await this.$totalPrice().getText();
        const priceString = parseFloat(text.replace('Item total: $', ''));
        return priceString;
    }
}

export default new CheckoutConfirmation();