class ProductsPage {
  constructor() {
    this.url = "https://shop.westerndigital.com/c/all-products";

    this.lastProducts = element(by.css('.ng-scope[ng-repeat^="products in productJSON"]:last-child'));
  }

  async waitPage() {
    browser.wait(
      ExpectedConditions.urlIs(this.url),
      5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.lastProducts),
      10000);
  }

  async waitReload() {
    await browser.wait(
      ExpectedConditions.stalenessOf(this.lastProducts),
      10000);

    // browser.sleep(5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.lastProducts),
      10000);
  }
};

module.exports = ProductsPage;