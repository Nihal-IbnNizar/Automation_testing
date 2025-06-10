import CommonClass from "./CommonClass";

class UserProfile extends CommonClass{
    constructor(){
        super();

        this.$myAccount = () => $(`//span[text()='My Account']`);
        this.$mensCategory=()=>$(`//span[text()='Men']`);
    }
}

export default new UserProfile();