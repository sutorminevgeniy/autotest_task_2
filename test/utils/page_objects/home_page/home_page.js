class HomePage {
  constructor() {
    this.url = "https://shop.westerndigital.com";
    this.html = element(by.tagName('html'));
  }

  async waitPage() {
    await browser.wait(
      ExpectedConditions.or(
        ExpectedConditions.urlIs('https://shop.westerndigital.com/ru-ru'),
        ExpectedConditions.urlIs('https://shop.westerndigital.com')),
      10000);

    return browser.wait(
      ExpectedConditions.presenceOf(this.html),
      5000);
  };
};

module.exports = HomePage;