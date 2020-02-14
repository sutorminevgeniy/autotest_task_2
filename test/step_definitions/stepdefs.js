const expect = require("chai").expect;
const logger = require('../config/loggerConfig.js').logger;

const { Given, When, Then } = require('cucumber');

const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);

const elementHelper = require('./stepFunctions.js').getPageObjectElement;
const PageFactory = require("../utils/page_objects/pageFactory");

Given('I open {string} page', async function (pageName) {
  return browser.get('https://shop.westerndigital.com');
});

Given('I click {string}', async function (alias) {
  logger.info(`I click ${alias}`);
  await elementHelper(alias).click();
});

Given('I scroll to {string}', async function (alias) {
  logger.info(`I scroll to ${alias}`);
  await browser.executeScript("arguments[0].scrollIntoView();", elementHelper(alias));
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
  const page = PageFactory.getPage(pageName);

  await page.waitPage();
});

When('I wait until {string} page is reload', async function (pageName) {
  const page = PageFactory.getPage(pageName);

  await page.waitReload();
});


Then('Count of {string} should be {int}', async function (alias, expectedAnswer) {
  const countResults = await elementHelper(alias).count();

  expect(countResults).to.equal(expectedAnswer);
});

Then('Items of {string} page should sort by {string}', async function (alias, property) {
  let result = await elementHelper(alias).map(async function (elm, index) {
    let price = await elm.getText();

    price = Number.parseFloat(price.slice(1));

    return { index, price };
  });

  let [...sortedResult] = result;

  sortedResult.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    }

    if (a.index < b.index) {
      return -1;
    } else if (a.index > b.index) {
      return 1;
    }

    return 0;
  })

  expect(result).to.have.ordered.members(sortedResult);
});

Then('URL page should be {string}', async function (expectedURL) {
  const uri = await browser.getCurrentUrl();

  expect(uri).to.equal(expectedURL);
});

Then('HTML lang should be {string}', async function (expectedLang) {
  const lang = await elementHelper('HTML').getAttribute('lang');

  expect(lang).to.equal(expectedLang);
});

Then('Page title should be {string}', async function (expectedTitle) {
  const title = await browser.getTitle();

  expect(title).to.equal(expectedTitle);
});