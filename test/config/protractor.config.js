"use strict";

const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');

const reporterOptions = {
  theme: 'bootstrap',
  jsonFile: path.join(__dirname, '../../reports/report.json'),
  output: path.join(__dirname, '../../reports/cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: true
};

exports.config = {
  directConnection: true,

  allScriptsTimeout: 200000,
  getPageTimeout: 200000,

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  baseUrl: 'localhost',

  specs: [path.resolve('./test/features/*.feature')],

  capabilities: {
    browserName: yargs.browser || 'chrome',
    shardTestFiles: yargs.instances > 1,
    maxInstances: yargs.instances || 1,
    chromeOptions: {
      args: ['--no-sandbox']
    }
  },

  cucumberOpts: {
    require: [path.resolve('./test/step_definitions/**/*.js')],
    ignoreUncaughtExceptions: true,
    format: ['json:./reports/report.json'],
    tags: yargs.tag || '@search'
  },

  mochaOpts: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportFilename: 'UItest',
      reportDir: 'reports'
    },
    timeout: 70000
  },

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },

  afterLaunch: () => {
    return reporter.generate(reporterOptions);
  }
}