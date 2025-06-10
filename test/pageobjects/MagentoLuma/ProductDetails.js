import CommonClass from "./CommonClass";

class ProductDetails extends CommonClass{
    constructor(){
        super();

        this.$productName=()=>$(`//span[@class='base']`);
        this.$productMediumSize=()=>$(`#option-label-size-143-item-168`);
        this.$productBlackColor=()=>$(`#option-label-color-93-item-49`);
        this.$addToCartBtn=()=>$(`//button[@title='Add to Cart']`);

        this.$showCart=()=>$(`//a[@class='action showcart']`);
        this.$viewCart=()=>$(`//span[text()='View and Edit Cart']`);
    }

    addToCart = async () => {
        await this.$productMediumSize().click();
        await this.$productBlackColor().click();
        await this.$addToCartBtn().click();
    }
}

export default new ProductDetails();