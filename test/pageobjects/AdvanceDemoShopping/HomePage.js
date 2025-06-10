import CommonClass from "./CommonClass";

class HomePage extends CommonClass{
    constructor(){
        super();
        
        this.$loginIcon = () => $(`#hrefUserIcon`);
        this.$speakers = () => $(`#speakersTxt`);

        this.$loggedInUser = () => $(`//a[@id='menuUserLink']//span`);
        
    }
}

export default new HomePage();