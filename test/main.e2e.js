const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { BannerPage } = require('../pageobjects/BannerPage');

const mainPage = new MainPage();
const bannerPage = new BannerPage();

describe('Banner testing', function () {
  beforeEach(async function () {
    mainPage.navigate('https://velosiped.by/');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check banner click', async function () {
    await $(mainPage.btnKnow).click();
    expect(await $(bannerPage.contentPage).getText()).to.contain('Распродажа');
  });
});
