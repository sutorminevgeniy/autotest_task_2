const Navigate = require('./navigate');
const Search = require('./search');

class BasePage {
  constructor() {
    this.navigate = new Navigate();
    this.search = new Search();
  }

  async getCurrenUrl() {
    const currentUrl = await browser.getCurrentUrl();

    return currentUrl;
  };

  async getTitle() {
    return browser.getTitle();
  };

  open(url) {
    return browser.get(url);
  };
}

module.exports = BasePage;