import CommonClass from "./CommonClass";
import { faker } from "@faker-js/faker";

class CreateAccount extends CommonClass{
    constructor(){
        super();
        this.$title=()=>$(`//span[text()='Create New Customer Account']`);
        this.$firstName=()=>$(`#firstname`);
        this.$lastName=()=>$(`#lastname`);

        this.$email=()=>$(`#email_address`);
        this.$password=()=>$(`#password`);
        this.$confirmPassword=()=>$(`#password-confirmation`);

        this.$createBtn=()=>$(`//button[@title='Create an Account']`);
    }

    fillData = async () => {
        await this.$firstName().setValue(faker.person.firstName());
        await this.$lastName().setValue(faker.person.lastName());
        await this.$email().setValue(faker.internet.email());
        let password=faker.internet.password()
        await this.$password().setValue(password);
        await this.$confirmPassword().setValue(password);

        await this.$createBtn().click();
    }
}

export default new CreateAccount();