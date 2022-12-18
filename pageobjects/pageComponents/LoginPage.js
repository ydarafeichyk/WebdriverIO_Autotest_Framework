const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class LoginPage extends BasePage {
  constructor() {
    super();
    this.btnLogin = "//a[@href='/auth/?backurl=/']";
    this.inputLogin = "input[name='USER_LOGIN']";
    this.inputPassword = "input[name='USER_PASSWORD']";
    this.btnSubmit = '.btn-primary.submit';
    this.linkForgot = '.forgot';
  }

  async clickLoginButton() {
    await I.click(this.btnLogin);
  }
  async login(name, password) {
    await I.setValue(this.inputLogin, name);
    await I.setValue(this.inputPassword, password);
    await I.click(this.btnSubmit);
  }

  async clickOnForgotLink() {
    await I.click(this.linkForgot);
  }
}

module.exports = { LoginPage };
