import CommonClass from "./CommonClass";

class HomePage extends CommonClass {
    constructor() {
        super();

        this.$logo = () => $(`//div[@class='app_logo']`);
    }
}

export default new HomePage();