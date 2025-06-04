import CommonClass from "./CommonClass";

class CartPage extends CommonClass{
    constructor(){
        super();

        this.$title = () => $(`//span[text()='Your Cart']`);
        this.$cartProductName = (prod) => $(`//div[text()='${prod}']`);
        this.$cartProductPrice = (prod) => $(`//div[text()='${prod}']/parent::a/following-sibling::div[@class='item_pricebar']/div`);
        this.$checkoutBtn = () => $(`//button[@id='checkout']`);
    }

    checkout = async () => {
        await this.$checkoutBtn().click();
    }
}

export default new CartPage();