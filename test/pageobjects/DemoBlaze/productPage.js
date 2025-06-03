class ProductPage {
    constructor() {
        this.$productTitle = () => $(`//h2[@class='name']`);
        this.$productPrice = () => $(`//h3[@class='price-container']`);
        this.$productDescription = () => $(`//div[@id='more-information']`);
        this.$addToCartButton = () => $(`//a[text()='Add to cart']`);
    }

    async isLoaded() {
        await expect(this.$productTitle()).toBeDisplayed();
        await expect(this.$addToCartButton()).toBeDisplayed();
    }
}

export default new ProductPage();
