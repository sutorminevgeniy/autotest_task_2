class SearchPage {
  constructor() {
    this.url = "https://shop.westerndigital.com/search";

    this.lastResult = element(by.css('.search-results>div:last-child'));
  }

  open() {
    return super.open(this.url);
  }

  async waitPage() {
    browser.wait(
      ExpectedConditions.urlContains(this.url),
      5000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.lastResult),
      20000);
  }
};

module.exports = SearchPage;