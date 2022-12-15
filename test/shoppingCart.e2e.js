const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');
const { ShoppingCartPage } = require('../pageobjects/ShoppingCartPage');
const I = require('../helpers/BaseElements');

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
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.mountainVelo);
    await catalogPage.addQuickProduct();
    expect(await $(shoppingCartPage.cartMessage).getText()).to.contain('Товар добавлен в корзину');
  });

  it('Check product removal from shopping cart', async function () {
    await I.click(catalogPage.btnVelo);
    await I.click(catalogPage.cityVelo);
    await catalogPage.addProduct();
    await shoppingCartPage.deleteProduct();
    expect(await $(shoppingCartPage.emptyMessage).getText()).to.contain('В КОРЗИНЕ ПОКА ПУСТО');
  });

  it('check the change in the quantity of the product in the cart', async function () {
    await I.click(catalogPage.btnSparePart);
    await I.click(catalogPage.linkVeloCamera);
    await I.click(catalogPage.element);
    await I.click(catalogPage.btnPlus);
    expect(await $(catalogPage.amount).getValue()).to.equal('2');
  });
});
