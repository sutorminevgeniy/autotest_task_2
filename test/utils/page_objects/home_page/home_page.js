const BasePage = require("../base_page/base_page");

class HomePage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com";
    this.html = element(by.tagName('html'));
  }

  open() {
    return super.open(this.url);
  }

  clickRegionSelector() {
    return element(by.css(".image>a[href='/region-selector']")).click();
  }

  async getHomePageUrl() {
    browser.wait(
      ExpectedConditions.or(
        ExpectedConditions.urlIs('https://shop.westerndigital.com/ru-ru'),
        ExpectedConditions.urlIs('https://shop.westerndigital.com')),
      5000);

    return browser.getCurrentUrl();
  };

  async waitPage() {
    browser.wait(
      ExpectedConditions.or(
        ExpectedConditions.urlIs('https://shop.westerndigital.com/ru-ru'),
        ExpectedConditions.urlIs('https://shop.westerndigital.com')),
      5000);

    browser.wait(
      ExpectedConditions.presenceOf(this.html),
      5000);
  };

  async getHtmlLang() {
    return this.html.getAttribute('lang');
  };
};

module.exports = HomePage;