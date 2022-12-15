const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { ComparisonPage } = require('../pageobjects/pageComponents/ComparisonPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const I = require('../helpers/BaseElements');

const mainPage = new MainPage();
const comparisonPage = new ComparisonPage();
const catalogPage = new CatalogPage();

describe('Testing the comparison module', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.teenageVelo);
    await I.click(catalogPage.linkCityVelo);
    await I.click(catalogPage.icon_addCompare);
    await I.click(comparisonPage.btn_Comparison);
  });

  it('Check adding product to comparison', async function () {
    expect(await $(catalogPage.linkCityVelo).isDisplayed()).to.equal(true);
  });

  it('Check product removal from comparison', async function () {
    await comparisonPage.removeFromComparison();
    expect(await $(comparisonPage.title_Compare).getText()).to.equal('В СПИСКЕ СРАВНЕНИЯ ПОКА ПУСТО');
  });
});
