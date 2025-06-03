import { $ } from '@wdio/globals';
import CommonClass from '../DemoBlaze/commonClass.js';
import { faker } from '@faker-js/faker';

class PracticeFormPage extends CommonClass {
    constructor() {
        super();
        this.$forms = () => $(`//div[h5='Forms']`)
        this.$practiceFormOption = () => $(`//span[text()='Practice Form']`)

        this.$firstName = () => $(`//input[@id='firstName']`);
        this.$lastName = () => $(`//input[@id='lastName']`);
        this.$email = () => $(`//input[@id='userEmail']`);
        this.$gender = (gender) => $(`//label[text()="${gender}"]`);
        this.$mobile = () => $(`//input[@id='userNumber']`);
        this.$dob = () => $(`//input[@id='dateOfBirthInput']`);
        this.$subjects = () => $(`//input[@id='subjectsInput']`);
        this.$hobby = (hobby) => $(`//label[text()="${hobby}"]`);
        this.$uploadPicture = () => $(`//input[@id='uploadPicture']`);
        this.$currentAddress = () => $('#currentAddress');          //if the id is unique, then we can use #
        this.$stateDropdown = () => $('#state');
        this.$selectState = (state) => $(`//div[text()="${state}"]`);
        this.$cityDropdown = () => $('#city');
        this.$selectCity = (city) => $(`//div[text()="${city}"]`);

        this.$submit = () => $('#submit');
        this.$modalTitle = () => $(`//div[text()='Thanks for submitting the form']`);
        this.$modalClose = () => $(`#closeLargeModal`);
    }

    async navigate() {
        await this.$forms().waitForDisplayed({ timeout: 5000 });
        await this.$forms().click();
        await this.$practiceFormOption().click();
    }

    generateRandomFormData() {
        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            gender: 'Male',
            mobile: '9' + faker.string.numeric(9),
            dob: '23 Mar 2002',
            subjects: ['Computer Science', 'Physics'],
            hobbies: ['Sports', 'Music'],
            picturePath: 'test/resources/sample.jpg',
            address: faker.location.streetAddress(),
            state: 'NCR',
            city: 'Delhi'
        };
    }

    fillForm = async ({ firstName, lastName, email, gender, mobile, dob, subjects, hobbies, picturePath, address, state, city }) => {
        await this.$firstName().waitForDisplayed({ timeout: 5000 });
        await this.$firstName().setValue(firstName);
        await this.$lastName().setValue(lastName);
        await this.$email().setValue(email);
        await this.$gender(gender).click();
        await this.$mobile().setValue(mobile);

        await this.$dob().click();
        await browser.keys(['Control', 'a']);
        await browser.keys(dob);
        await browser.keys('Enter');

        for (const subject of subjects) {
            await this.$subjects().setValue(subject);
            await browser.keys('Enter');
        }

        for (const hobby of hobbies) {
            await this.$hobby(hobby).scrollIntoView();
            await this.$hobby(hobby).click();
        }

        const filePath = await browser.uploadFile(picturePath);
        await this.$uploadPicture().setValue(filePath);

        await this.$currentAddress().setValue(address);

        await this.$stateDropdown().click();
        await this.$selectState(state).click();

        await this.$cityDropdown().click();
        await this.$selectCity(city).click();

        await this.$submit().click();
    }

    async isLoaded() {
        await expect(this.$modalTitle()).toBeDisplayed();
        await this.$modalClose().click();
    }
}

export default new PracticeFormPage();
