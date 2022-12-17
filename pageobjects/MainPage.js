const { BasePage } = require('./BasePage');

class MainPage extends BasePage {
  constructor() {
    super();
    this.btnKnow = "//a[@class='cButton']";
  }

  async clickOnBunner() {
    await $(this.btnKnow).click();
  }
}

module.exports = { MainPage };
