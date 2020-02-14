class RegionPage {
  constructor() {
    this.url = "https://shop.westerndigital.com/region-selector";
    
    this.buttonRu = element(by.css("a.storeLanguageSelectorHref[href='/ru-ru']"));
  }

  open() {
    return super.open(this.url);
  }

  async waitPage() {
    return browser.wait(
      ExpectedConditions.presenceOf(this.buttonRu),
      10000);
  }
};

module.exports = RegionPage;