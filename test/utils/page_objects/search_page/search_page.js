const BasePage = require("../base_page/base_page");

var ExpectedConditions = protractor.ExpectedConditions;

class SearchPage extends BasePage {
  constructor() {
    super();

    this.url = "https://shop.westerndigital.com/search";

    this.allResults = element.all(by.css('.search-results>div'));
    this.lastResult = element(by.css('.search-results>div:last-child'));

    this.allSlides = element.all(by.css('.slick-track>div'));
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

  async getResults() {
    let results = await this.allResults.map(async function(elm, index) {
      let headElem = await elm.element(by.css('h6>a'));
      let head = await headElem.getText();

      let infoElem = await elm.element(by.css('article>h6~p'));
      let info = await infoElem.getText();

      return { index, head, info };
    });

    console.log(results);

    return results;
  }

  async getCountResults() {
    let results = await this.allResults.count();

    return results;
  }    

  async getCountSlides() {
    let results = await this.allSlides.count();
    
    return results;
  }
};

module.exports = SearchPage;