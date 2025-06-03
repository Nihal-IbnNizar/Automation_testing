import CommonClass from "./commonClass"

class HomePage extends CommonClass{
    constructor() {
        super()

        this.$categories = () => $(`//a[@id='cat']`);
        this.$phoneSearch = () => $(`//a[text()="Phones"]`);
        this.$laptopsSearch = () => $(`//a[text()="Laptops"]`);
        this.$monitorsSearch = () => $(`//a[text()="Monitors"]`);

        this.$productSearch = (productName) => $(`//a[text()='${productName}']`)
        //this.$productPrice = (productName) => $(`//a[text()='${productName}']/parent::h4/following-sibling::h5`)
    }

}
export default new HomePage();