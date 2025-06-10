import CommonClass from "./CommonClass";

class CartPage extends CommonClass{
    constructor(){
        super();
        
        this.$title=()=>$(`//span[text()='Shopping Cart']`);
        //this.$productName=()=>$(``)
    }
}

export default new CartPage();