import { $ } from '@wdio/globals';
import { faker } from '@faker-js/faker';
import CommonClass from '../DemoBlaze/commonClass.js';

class WebTables extends CommonClass {
    constructor() {
        super();
        this.$elements = () => $(`//div[h5='Elements']`)
        this.$webtables = () => $(`//span[text()='Web Tables']`)

        this.$addBtn = () => $(`#addNewRecordButton`);
        this.$regForm = () => $(`#registration-form-modal`);

        this.$firstName = () => $(`//input[@id='firstName']`);
        this.$lastName = () => $(`//input[@id='lastName']`);
        this.$email = () => $(`//input[@id='userEmail']`);
        this.$age = () => $(`//input[@id='age']`);
        this.$salary = () => $(`//input[@id='salary']`);
        this.$department = () => $(`//input[@id='department']`);
        this.$submit = () => $(`//button[@id='submit']`);

        this.$dataloc = (cont) => $(`//div[text()="${cont}"]`);
        this.$editBtn = (nm) => $(`//div[text()="${nm}"]/following-sibling::div[6]/div/span[@title="Edit"]`)
        this.$deleteBtn = (nm) => $(`//div[text()="${nm}"]/following-sibling::div[6]/div/span[@title="Delete"]`);

    }

    async openWebTables() {
        await this.$elements().click();
        await this.$webtables().click();
    }

    enterdata = async () => {

        await this.$addBtn().click();
        const randomName = faker.person.firstName();
        const randomLastName = faker.person.lastName();
        const randomEmail = faker.internet.email();
        const randomAge = faker.number.int({ min: 25, max: 65 });
        const randomSalary = faker.number.int({ min: 30000, max: 100000 });
        const randomDepartment = faker.commerce.department();

        await this.$firstName().setValue(randomName);
        await this.$lastName().setValue(randomLastName);
        await this.$email().setValue(randomEmail);
        await this.$age().setValue(randomAge);
        await this.$salary().setValue(randomSalary);
        await this.$department().setValue(randomDepartment);
        await this.$submit().click();

        return {
            randomName,
            randomLastName,
            randomEmail,
            randomAge,
            randomSalary,
            randomDepartment
        }
    }

    edit = async () => {
        const editedRandName = faker.person.firstName();
        await this.$firstName().setValue(editedRandName);
        await this.$submit().click();

        return editedRandName;
    }

}

export default new WebTables();