import CommonClass from "./CommonClass";

class HomePage extends CommonClass {
    constructor() {
        super();

        //Locators of the homepage
        this.$logo = () => $(`//div[@class='app_logo']`);
        this.$productHeader = () => $(`//span[text()='Products']`);

        //Locators for the product name and its price
        this.$productName = (prod) => $(`//div[text()='${prod}']`)
        this.$productPrice = (prod) => $(`//div[text()='${prod}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/div[@class='inventory_item_price']`)

        //Locators for Add to cart and Remove button toggle on click
        this.$addToCartBtn = (prod) => $(`//div[text()='${prod}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Add to cart']`)
        this.$removeBtn = (prod) => $(`//div[text()='${prod}']/ancestor::div[@class='inventory_item_label']/following-sibling::div/button[text()='Remove']`)
        this.$cartBadge = () => $(`//span[@class='shopping_cart_badge']`);
    }

    /**
     * Adds a product to the cart
     * @param {string} prod 
     */
    addToCart = async (prod) => {
        await this.$productName(prod).scrollIntoView();
        await this.$addToCartBtn(prod).click();
    }

    /**
     * The price of the product is extracted from the product name
     * @param {string} prod 
     * @returns the price of the product
     */
    getProductPrice = async (prod) => {
        return await (this.$productPrice(prod)).getText();
    }

}

export default new HomePage();