import CommonClass from "./CommonClass";

class HomePage extends CommonClass {
    constructor() {
        super();

        this.$logo = () => $(`//div[@class='app_logo']`);
        this.$productHeader = () => $(`//span[text()='Products']`);

        this.$productName = (prod) => $(`//div[text()='${prod}']`)
        this.$productPrice = (prod) => $(`//div[text()='${prod}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/div[@class='inventory_item_price']`)

        this.$addToCartBtn = (prod) => $(`//div[text()='${prod}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Add to cart']`)
        this.$removeBtn = (prod) => $(`//div[text()='${prod}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Remove']`)
        this.$cartBadge = () => $(`//span[@class='shopping_cart_badge']`);
    }

    addToCart = async (prod) => {
        await this.$productName(prod).scrollIntoView();
        await this.$addToCartBtn(prod).click();
    }

    getProductPrice = async (prod) => {
        return await (this.$productPrice(prod)).getText();
    }

}

export default new HomePage();