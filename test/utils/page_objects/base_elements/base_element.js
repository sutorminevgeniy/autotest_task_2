class Element {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }
    click() {
        return this.element.click();
    };
    async getText() {
        const elementText = await this.element.getText();

        return elementText;
    };
};

module.exports = Element;