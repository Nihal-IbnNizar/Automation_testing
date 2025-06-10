import CommonClass from "./CommonClass";

class UserProfile extends CommonClass{
    constructor(){
        super();

        this.$myAccount = () => $(`//span[text()='My Account']`)
    }
}

export default new UserProfile();