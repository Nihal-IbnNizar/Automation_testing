import { $ } from '@wdio/globals';
import CommonClass from '../DemoBlaze/commonClass.js';

class WebTables extends CommonClass {
    constructor() {
        super();
        this.$elements = () => $(`//div[text()='Elements']`)
        this.$webtables = () => $(`//span[text()='Web Tables']`)

        this.$addBtn = () => $(`#addNewRecordButton`);
        this.$regForm = () => $(`#registration-form-modal`);

        this.$firstName = () => $(`//input[@id='firstName']`);
        this.$lastName = () => $(`//input[@id='lastName']`);
        this.$email = () => $(`//input[@id='userEmail']`);
        this.$age = () => $(`//input[@id='age']`);
        this.$salary = () => $(`//input[@id='salary']`);
        this.$dept = () => $(`//input[@id='department']`);
        this.$submit = () => $(`#submit`)
    }

    async openWebTables() {
        await this.$elements().click();
        await this.$webtables().click();
        await this.$addBtn().isDisplayed();
    }

    async fillRegForm() {
        await this.$addBtn().click();
        await this.$regForm().isDisplayed();

        await this.$firstName().setValue("Test");
        await this.$lastName().setValue("User");
        await this.$email().setValue("testuser@gmail.com");
        await this.$age().setValue(25);
        await this.$salary().setValue(25000);
        await this.$dept().setValue('IT');

        await this.$submit().click();
    }

    async validateEntries(){
        
    }

}

export default new WebTables();