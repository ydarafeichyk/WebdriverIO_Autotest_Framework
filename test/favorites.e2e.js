const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { FavoritesPage } = require('../pageobjects/pageComponents/FavoritesPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');

const mainPage = new MainPage();
const favoritesPage = new FavoritesPage();
const catalogPage = new CatalogPage();

describe('Favorites module testing', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
    await catalogPage.selectProductFromCatalog(catalogPage.btnVelo, catalogPage.teenageVelo, catalogPage.linkCityVelo);
    await catalogPage.AddWish();
    await favoritesPage.clickOnButtonFavorites();
  });
  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check adding product to favorites', async function () {
    expect(await $(catalogPage.linkCityVelo).isDisplayed()).to.equal(true);
  });

  it('Check the field send product by email', async function () {
    await favoritesPage.sendEmail('test2022project@mail.ru');
    expect(await $(favoritesPage.btnSendEmail).getText()).to.equal('Отправлено');
  });

  it('Check product removal from favorites', async function () {
    await favoritesPage.deleteProductFromFavorites();
    expect(await $(favoritesPage.titleWish).getText()).to.equal('В ИЗБРАННОМ ПОКА ПУСТО');
  });
});
