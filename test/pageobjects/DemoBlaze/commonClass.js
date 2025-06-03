export default class CommonClass {
    async open(url) {
        return browser.url(`${url}`);
    } 

    constructor() {
        this.$navBar = (content) => $(`//a[text()='${content}']`);

        this.$$headerButtons = () => $$(`//ul[@class='navbar-nav ml-auto']//a`)
    }

    async verifyHeaderButtonsVisible() {
        const buttons = await this.$$headerButtons();
        for (const button of buttons) {
            await expect(button).toBeDisplayed();
        }
    }
}