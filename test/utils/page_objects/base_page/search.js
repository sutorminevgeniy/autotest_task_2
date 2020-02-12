class Search {
  constructor() {
    this.formSearch = element(by.css('.desktop-search-container form[action="/search"]'));
    this.inputSearch = element(by.id('searchright'));
    this.labelSearch = element(by.css('label[for="searchright"]'));
  }

  async clickFormSearch() {
    return this.labelSearch.click();
  }

  async sendFormSearch(str) {
    return this.inputSearch.sendKeys(str, protractor.Key.RETURN);
  }
}

module.exports = Search;