// spec.js
const expect = require("chai").expect;

const PageFactory = require("../utils/page_objects/pageFactory");

describe('Region changing shop.westerndigital.com', function () {
  let homePage, searchPage;
  let countResultsSearch, countSlidesSearch;

  before(async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home");

    homePage.open();

    await homePage.search.clickFormSearch();
    await homePage.search.sendFormSearch('WINDBREAKER');

    searchPage =  PageFactory.getPage("Search");
    await searchPage.waitProducts();
    countResultsSearch = await searchPage.getCountResults();
    countSlidesSearch = await searchPage.getCountSlides();
    console.log(countResultsSearch, countSlidesSearch);

    // await browser.sleep(10000);
  });

  it('Verifying count result search', async function () {
    expect(countResultsSearch).to.equal(3);
  });

  it('Verifying count slides search', async function () {
    expect(countSlidesSearch).to.equal(2);
  });


  after(function () {
    // browser.close();
  });
});