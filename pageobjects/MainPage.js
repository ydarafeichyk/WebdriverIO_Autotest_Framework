const { BasePage } = require('./BasePage');
const I = require('../helpers/BaseElements');

class MainPage extends BasePage {
  constructor() {
    super();
    this.btnKnow = "//a[@class='cButton']";
  }

  async clickOnBunner() {
    await I.click(this.btnKnow);
  }
}

module.exports = { MainPage };
