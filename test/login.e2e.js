const { expect } = require('chai');
const { MainPage } = require('../pageobjects/MainPage');
const { LoginPage } = require('../pageobjects/pageComponents/LoginPage');
const { AuthorizationPage } = require('../pageobjects/AuthorizationPage');
const { ForgotPasswordPage } = require('../pageobjects/ForgotPasswordPage');

const mainPage = new MainPage();
const loginPage = new LoginPage();
const authorizationPage = new AuthorizationPage();
const forgotPasswordPage = new ForgotPasswordPage();

describe('Authorization module testing', function () {
  beforeEach(async function () {
    await mainPage.navigate('https://velosiped.by/');
  });

  it('Check login in with invalid credentials', async function () {
    await loginPage.clickLoginButton();
    await loginPage.login('login', '1111111');
    expect(await $(authorizationPage.authorizationMessage).getText()).to.contain('НЕВЕРНЫЙ ЛОГИН ИЛИ ПАРОЛЬ.');
  });

  it('Check password recovery', async function () {
    await loginPage.clickLoginButton();
    await loginPage.clickOnForgotLink();
    expect(await $(forgotPasswordPage.passwordMessage).getText()).to.contain('Забыли пароль?');
  });
});
