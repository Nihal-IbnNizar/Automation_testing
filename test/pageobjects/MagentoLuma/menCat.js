import CommonClass from "./CommonClass";

class MensCategory extends CommonClass{
    constructor(){
        super();

        this.$title=()=>$(`//span[text()='Men']/parent::h1`);
        this.$productName=(prod)=>$(`//a[@title='${prod}']`);
        //this.$addToCartBtn=(prod)=>$(`//a[@title='${prod}']/../following-sibling::div[@class='product-item-inner']//button[@title='Add to cart']`);
    }
}

export default new MensCategory();