const BasePage = require("../base_page/base_page");

var ExpectedConditions = protractor.ExpectedConditions;

class ProductsPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/c/all-products";

    this.lastProducts = element(by.css('.ng-scope[ng-repeat^="products in productJSON"]:last-child'));
  }

  open() {
    return super.open(this.url);
  }

  async waitProducts() {
    browser.wait(
      ExpectedConditions.urlIs(this.url),
      5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.lastProducts),
      10000);
  }

  async waitReload() {
    // browser.wait(
    //   ExpectedConditions.stalenessOf(this.lastProducts),
    //   5000);

    browser.sleep(5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.lastProducts),
      10000);
  }
};

module.exports = ProductsPage;