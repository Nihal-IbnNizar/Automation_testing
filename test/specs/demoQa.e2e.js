import practiceForm from '../pageobjects/DemoQA/practiceForm.js';
import dragDrop from '../pageobjects/DemoQA/dragDrop.js';
import webTables from '../pageobjects/DemoQA/webTables.js';
import data from '../TestData/demoQaTestdata.json' with {type: 'json'};

describe('DemoQA Website Automation', () => {

    it('should validate the URL of the website', async () => {
        await practiceForm.open(data.url);
        await expect(practiceForm.$forms()).toBeDisplayed();
    });

    //PRACTICE FORM
    it('should navigate to practice form', async () => {
        await practiceForm.navigate();
        await expect(practiceForm.$submit()).toBeDisplayed();
    });

    // it('should fill and submit the practice form', async () => {
    //     //const formData = practiceForm.generateRandomFormData();
    //     await practiceForm.fillForm(practiceForm.generateRandomFormData());
    //     await expect(practiceForm.$submit()).toBeDisplayed();
    // });

    // it('should check if the success modal is displayed', async () => {
    //     await expect(practiceForm.isLoaded());
    // });


    //DRAG AND DROP
    // it('should navigate to interactions and choose the droppable option', async () => {
    //     await dragDrop.openDroppable();
    //     await expect(await dragDrop.$droppable()).toBeDisplayed()
    // });

    // it('should drag and drop the element in the box', async () => {
    //     await dragDrop.openDroppable();
    //     await dragDrop.$draggable().dragAndDrop(await dragDrop.$droppable());
    //     await expect(await dragDrop.$droppable()).toHaveTextContaining('Dropped!');
    // });


    //WEB TABLES
    it('should navigate to the web tables', async () => {
        await expect(webTables.openWebTables());
    })

    let testData, ename;
    it('should fill in  the form and validate it is displayed', async () => {
        testData = await webTables.enterdata();
        await expect(webTables.$dataloc(testData.randomName)).toBeDisplayed();
        await expect(webTables.$dataloc(testData.randomLastName)).toBeDisplayed();
        await expect(webTables.$dataloc(testData.randomEmail)).toBeDisplayed();
        await expect(webTables.$dataloc(testData.randomAge.toString())).toBeDisplayed();
        await expect(webTables.$dataloc(testData.randomSalary.toString())).toBeDisplayed();
        await expect(webTables.$dataloc(testData.randomDepartment)).toBeDisplayed();
    });

    it('edit the form and validate it is displayed', async () => {
        await webTables.$editBtn(testData.randomName).click();
        ename = await webTables.edit();
        browser.pause(2000);

        await expect(webTables.$dataloc(ename)).toBeDisplayed();
    });

    it('delete the data and validate it is deleted', async () => {
        await webTables.$deleteBtn(ename).click();
        await expect(webTables.$dataloc(ename)).not.toBeDisplayed();
        await browser.pause(5000);
    });
});
