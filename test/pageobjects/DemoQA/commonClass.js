export default class CommonClass {
    async open(url) {
        // return browser.url(`${url}`);
        return browser.url(url);
    }
}
