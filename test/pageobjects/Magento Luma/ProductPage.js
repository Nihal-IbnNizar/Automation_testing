import CommonClass from "./CommonClass";

class ProductsPage extends CommonClass{
    constructor(){
        super();

        this.$title=(productname)=>$(`//span[text()='${productname}']`);
        this.$sizeM=()=>$(`#option-label-size-143-item-168`);
        this.$colorBlue=()=>$(`#option-label-color-93-item-50`);
        this.$quantity=()=>$(`//input[@name='qty']`);
        this.$addToCartBtn=()=>$(`//button[@title='Add to Cart']`);
        this.$addToCartSuccessMsg=()=>$(`//div[@class="message-success success message"]`);

        this.$cartIcon=()=>$(`//a[@class="action showcart"]`);
        this.$updatedQty=()=>$(`//input[contains(@class, 'item-qty cart-item-qty')]`);
        this.$updateBtn=()=>$(`//button[@title='Update']`);

        this.$viewCart=()=>$(`//a[@class='action viewcart']`);
    }

    /**
     * Adds a product to the cart
     */
    addToCart = async () => {
        await this.$sizeM().click();
        await this.$colorBlue().click();
        await this.$quantity().setValue('2');
        await this.$addToCartBtn().click();
    }

    /**
     * Updates the quatity of the product from the cart modal
     */
    updateQty = async () => {
        await this.$cartIcon().click();
        await this.$updatedQty().setValue('1');
        await this.$updateBtn().waitForDisplayed({timeout:5000});
        await this.$updateBtn().click();
    }

    /**
     * Clicks on view cart button in the cart modal
     */
    viewCart = async () => {
        await this.$viewCart().click();
    }

}

export default new ProductsPage();