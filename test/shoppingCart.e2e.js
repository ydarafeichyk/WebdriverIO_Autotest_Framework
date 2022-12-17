const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const { ShoppingCartPage } = require('../pageobjects/ShoppingCartPage');

const mainPage = new MainPage();
const catalogPage = new CatalogPage();
const shoppingCartPage = new ShoppingCartPage();

describe('Shopping cart module testing', function () {
  beforeEach(async function () {
    mainPage.navigate('https://velosiped.by/');
  });

  afterEach(async function () {
    await browser.reloadSession();
  });

  it('Check adding product to shopping cart', async function () {
    await catalogPage.selectProductFromCatalog(catalogPage.btnVelo, catalogPage.cityVelo, catalogPage.linkCityVelo);
    await catalogPage.addProductToCart();
    expect(await $(catalogPage.linkCityVelo).isDisplayed()).to.equal(true);
  });

  it('Check product removal from shopping cart', async function () {
    await catalogPage.selectProductFromCatalog(catalogPage.btnVelo, catalogPage.cityVelo, catalogPage.linkCityVelo);
    await catalogPage.addProductToCart();
    await shoppingCartPage.deleteProduct();
    expect(await $(shoppingCartPage.emptyMessage).getText()).to.contain('В КОРЗИНЕ ПОКА ПУСТО');
  });

  it('check the change in the quantity of the product in the cart', async function () {
    await catalogPage.selectProductFromCatalog(catalogPage.btnSparePart, catalogPage.linkVeloCamera, catalogPage.element);
    await catalogPage.changeProductQuantity();
    expect(await $(catalogPage.amount).getValue()).to.equal('2');
  });
});
