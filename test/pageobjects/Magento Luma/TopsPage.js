import CommonClass from "./CommonClass";

class TopsCategoryPage extends CommonClass {
    constructor() {
        super();

        this.$title = () => $(`//span[text()='Tops']/parent::h1`);
        this.$sortByDropDown = () => $(`//select[@class='sorter-options']`);
        this.$priceFilter = () => $(`//option[@value='price']`);

        this.$productImg = (product) => $(`//img[@alt='${product}']`);
    }

    /**
     * Filters the product by price
     */
    filter = async () => {
        await this.$sortByDropDown().click();
        await this.$priceFilter().click();
    }
}

export default new TopsCategoryPage();