import practiceForm from '../pageobjects/DemoQA/practiceForm.js';
import dragDrop from '../pageobjects/DemoQA/dragDrop.js';
import webTables from '../pageobjects/DemoQA/webTables.js';
import data from '../TestData/demoQaTestdata.json' with {type: 'json'};

describe('DemoQA Practice Form Automation', () => {

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
    it('should navigate to the web tables', async()=>{
        await expect (webTables.openWebTables());
    })

    it('should fill in the registration form', async()=>{
        await expect (webTables.fillRegForm());
    })
});
