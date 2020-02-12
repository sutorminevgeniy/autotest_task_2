const { Given, When, Then } = require('cucumber');

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const expect = require("chai").expect;

const PageFactory = require("../utils/page_objects/pageFactory");

let homePage, searchPage;

Given('today is Sunday', async function () {
  homePage = PageFactory.getPage("Home");

  homePage.open();

  await homePage.search.clickFormSearch();
  await homePage.search.sendFormSearch('WINDBREAKER');

});

When('I ask whether it\'s Friday yet', async function () {
  searchPage = PageFactory.getPage("Search");
  await searchPage.waitProducts();
});

Then('I should be told {string}', async function (expectedAnswer) {
  const countResultsSearch = await searchPage.getCountResults();

  expect(countResultsSearch).to.equal(3);
});

Then('I should be told me {string}', async function (expectedAnswer) {
  const countSlidesSearch = await searchPage.getCountSlides();

  expect(countSlidesSearch).to.equal(2);
});
