const expect = require("chai").expect;

const { Given, When, Then } = require('cucumber');

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const elementHelper = require('./stepFunctions.js').getPageObjectElement;
const PageFactory = require("../utils/page_objects/pageFactory");


let homePage, searchPage;


Given('I open {string} page', async function (pageName) {
  homePage = PageFactory.getPage(pageName);
  homePage.open();
});

Given('I click {string}', async function (alias) {
  await elementHelper(alias).click();
});

Given('I input {string} in {string}', async function (stringInput, alias) {
  await elementHelper(alias).sendKeys(stringInput, protractor.Key.RETURN);
});


When('I wait until {string} page is present', async function (pageName) {
  if (pageName === 'Search') {
    searchPage = PageFactory.getPage(pageName);
    await searchPage.waitProducts();
  }
});


Then('Count of {string} should be {int}', async function (alias, expectedAnswer) {
  const countResults = await elementHelper(alias).count();

  expect(countResults).to.equal(expectedAnswer);
});
