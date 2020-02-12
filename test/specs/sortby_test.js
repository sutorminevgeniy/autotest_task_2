// spec.js
const expect = require("chai").expect;

const PageFactory = require("../utils/page_objects/pageFactory");

describe.skip('Sorting products shop.westerndigital.com', function () {
  let homePage, productsPage;
  let resultPrice, sortedPrice;

  before(async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home");

    homePage.open();

    homePage.navigate.hoverButtonShop();
    await homePage.navigate.clickButtonAllProducts();

    productsPage = PageFactory.getPage("Products");
    await productsPage.waitProducts();

    await productsPage.chooseSortBy();
    await productsPage.waitProducts();
    resultPrice = await productsPage.getPrices();

    sortedPrice = resultPrice.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    })

    // await browser.sleep(5000);
  });


  it('Verifying sort dy price', async function () {
    expect(resultPrice).to.equal(sortedPrice);
  });
  
  it('Verifying ordered dy price', async function () {
    expect(resultPrice).to.have.ordered.members(sortedPrice);
  });

  after(function () {
    // browser.close();
  });
});