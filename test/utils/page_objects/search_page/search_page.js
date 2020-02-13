const BasePage = require("../base_page/base_page");

var ExpectedConditions = protractor.ExpectedConditions;

class SearchPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/search";

    this.lastResult = element(by.css('.search-results>div:last-child'));
  }

  open() {
    return super.open(this.url);
  }

  async waitProducts() {
    browser.wait(
      ExpectedConditions.urlContains(this.url),
      5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.lastResult),
      20000);
  }
};

module.exports = SearchPage;