const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { LocationPage } = require('../pageobjects/pageComponents/LocationPage');

const mainPage = new MainPage();
const locationPage = new LocationPage();

describe('testing location change', function () {
  beforeEach(async function () {
    mainPage.navigate('https://velosiped.by/');
    await locationPage.clickOnLocationLink();
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check correct display the title', async function () {
    expect(await browser.getTitle()).to.equal('Купить Велосипед в Минске | Velosiped.BY');
  });

  it('Check location change', async function () {
    await locationPage.chooseLocation('Брест');
    expect(await $(locationPage.link_location).getText()).to.contain('Брест');
  });

  it('Check the location change by entering the location in the input field', async function () {
    await locationPage.chooseLocationByField('Лида');
    expect(await $(locationPage.link_location).getText()).to.contain('Лида');
  });
});
