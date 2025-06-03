import CommonClass from "./commonClass";

class DragDrop extends CommonClass {
    constructor() {
        super();
        this.$interaction = () => $(`//div[text()='Interactions']`);
        this.$droppableOption = () => $(`//span[text()='Droppable']`);

        this.$draggable = () => $(`//div[@id='draggable']`);
        this.$droppable = () => $(`//div[@id='droppable']`);
    }

    async openDroppable() {
        await this.$interaction().scrollIntoView();
        await this.$interaction().click();

        await this.$droppableOption().waitForClickable({ timeout: 5000 });
        await this.$droppableOption().waitForClickable({ timeout: 5000 });
        //await this.$droppableOption().click();
        await this.$droppable().waitForDisplayed({ timeout: 5000 });

    }

}

export default new DragDrop();