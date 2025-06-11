import CommonClass from "./CommonClass";

class CartPage extends CommonClass{
    constructor(){
        super();

        this.$title=()=>$(`//span[text()='Shopping Cart']`);
        this.$productName=()=>$(`//strong[@class='product-item-name']/a`);

        this.$checkoutBtn=()=>$(`//span[text()='Proceed to Checkout']`);
        
    }

}

export default new CartPage();