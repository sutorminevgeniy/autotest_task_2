const expect = require("chai").expect;
const logger = require('../config/loggerConfig.js').logger;

const { Given, When, Then } = require('cucumber');

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const elementHelper = require('./stepFunctions.js').getPageObjectElement;
const PageFactory = require("../utils/page_objects/pageFactory");

Given('I open {string} page', async function (pageName) {
  const page = PageFactory.getPage(pageName);
  page.open();
});

Given('I click {string}', async function (alias) {
  logger.info(`I click ${alias}`);
  await elementHelper(alias).click();
});

Given('I input {string} in {string}', async function (stringInput, alias) {
  logger.info(`I input ${stringInput} in ${alias}`);
  await elementHelper(alias).sendKeys(stringInput, protractor.Key.RETURN);
});

Given('I hover {string} of menu', function (alias) {
  logger.info(`I hover ${alias} of menu`);
  browser.actions().mouseMove(elementHelper(alias)).perform();
});


When('I wait until {string} page is present', async function (pageName) {
  waitPage = PageFactory.getPage(pageName);

  if (pageName === 'Search' || pageName === 'Products') {
    await waitPage.waitProducts();
  }
});


Then('Count of {string} should be {int}', async function (alias, expectedAnswer) {
  const countResults = await elementHelper(alias).count();

  expect(countResults).to.equal(expectedAnswer);
});

Then('Items of {string} page should sort by {string}', async function (alias, property) {
  let result = await elementHelper(alias).map(async function(elm, index) {
    let price = await elm.getText();

    price = Number.parseFloat(price.slice(1));

    return { index, price };
  });

  sortedResult = result.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  })

  console.log(result);
  console.log(sortedResult);

  expect(result).to.have.ordered.members(sortedResult);
});
