const expect = require("chai").expect;

const PageFactory = require("../utils/page_objects/pageFactory");

describe.skip('Region changing shop.westerndigital.com', function () {
  let homePage, regionPage;

  before(async function () {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();

    homePage = PageFactory.getPage("Home");

    homePage.open();
    homePage.clickRegionSelector();
    
    regionPage = PageFactory.getPage("Region");
    await regionPage.clickRussionRegion();
    
    homePage.waitPage();
  });


  it('Verifying URI', async function () {
    const uri = await homePage.getCurrenUrl();

    expect(uri).to.equal('https://shop.westerndigital.com/ru-ru');
  });

  it('Verifying HTML lang', async function () {
    const lang = await homePage.getHtmlLang();

    expect(lang).to.equal('ru-RU');
  });

  it('Verifying title', async function () {
    const title = await homePage.getTitle();

    expect(title).to.equal('Магазин Western Digital');
  });
});