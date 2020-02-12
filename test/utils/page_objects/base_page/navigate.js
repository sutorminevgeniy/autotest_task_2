class Navigate {
  constructor() {
    this.buttonShop = element(by.id('productStore'));
    this.buttonAllProducts = element(by.css('#store_all_nav a[href="/c/all-products"]'));
  }

  hoverButtonShop() {
    browser.actions().mouseMove(this.buttonShop).perform();
  }

  async clickButtonAllProducts() {
    return this.buttonAllProducts.click();
  }
}

module.exports =  Navigate;