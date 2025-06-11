import CommonClass from "./CommonClass";

class SuccessPage extends CommonClass{
    constructor(){
        super();

        this.$title=()=>$(`//span[text()='Thank you for your purchase!']`);
    
    }

}

export default new SuccessPage();