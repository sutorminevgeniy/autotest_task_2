const BasePage = require("../base_page/base_page");

var ExpectedConditions = protractor.ExpectedConditions;

class ProductsPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/c/all-products";

    this.allProducts = element.all(by.css('.ng-scope[ng-repeat^="products in productJSON"] div[ng-if^="productPricesInfo"] p'));
    this.lastProducts = element(by.css('.ng-scope[ng-repeat^="products in productJSON"]:last-child'));

    this.selectSortBy = element(by.model('sortBy'));
    this.optionLowHight = element(by.css('option[value="priceAsce"]'));
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
      20000);
  }

  async chooseSortBy() {
    await this.selectSortBy.click();

    return this.optionLowHight.click();
  }

  async getPrices() {
    let prices = await this.allProducts.map(async function(elm, index) {
      let price = await elm.getText();

      price = Number.parseFloat(price.slice(1));

      return { index, price };
    });

    return prices;
  }

};

module.exports = ProductsPage;