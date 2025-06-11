import CommonClass from "./CommonClass";

class MensCategory extends CommonClass{
    constructor(){
        super();

        this.$title=()=>$(`//span[text()='Men']/parent::h1`);
        this.$topsCategory=()=>$(`//a[text()='Tops']`);
    }
}

export default new MensCategory();