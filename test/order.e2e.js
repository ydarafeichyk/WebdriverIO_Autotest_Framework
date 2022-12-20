const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { OrderPage } = require('../pageobjects/OrderPage');
const { CatalogPage } = require('../pageobjects/pageComponents/CatalogPage');

const mainPage = new MainPage();
const catalogPage = new CatalogPage();
const orderPage = new OrderPage();

describe('Ordering product', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
  });

  it('Check the one-click order function is available', async function () {
    await catalogPage.selectProductFromCatalog(catalogPage.btnVelo, catalogPage.teenageVelo, catalogPage.linkCityVelo);
    await catalogPage.clickOnButtonOneClick();
    await orderPage.orderProductInOneClick('test', '80171111111', 'It is test');
    expect(await $(orderPage.resultTitle).getText()).to.contain('Ваш заказ успешно отправлен');
  });

  it('Check the order function is available', async function () {
    await catalogPage.selectProductFromCatalog(catalogPage.btnVelo, catalogPage.mountainVelo, catalogPage.linkCityVelo);
    await catalogPage.goToCart();
    await catalogPage.clickOnButtonOrder();
    await orderPage.orderProduct('FirstName', 'test@mail.ru', '80171111111', 'Address', 'It is test');
    expect(await $(orderPage.orderNumber).getText()).to.contain('Ваш заказ');
  });
});
