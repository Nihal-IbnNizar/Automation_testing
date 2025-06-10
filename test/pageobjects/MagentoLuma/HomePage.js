import CommonClass from "./CommonClass";

class HomePage extends CommonClass{
    constructor(){
        super();
        this.$title = ()=> $(`//span[text()='Home Page']`);
        this.$createAccount = () => $(`//a[text()='Create an Account']`);
        //this.$signIn = ()=> $(`//li[@class='authorization-link']//a`)

        // this.$mensCategory=()=>$(`//span[text()='Men']`);

    }
}

export default new HomePage();