const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class ComparisonPage extends BasePage {
  constructor() {
    super();
    this.btnComparison = "//span[@class='icon']";
    this.elementLocation = '.imgBlock';
    this.iconDel = "ins[data-id='3441']";
    this.titleCompare = '//h3';
  }

  async removeFromComparison() {
    await I.scroll(this.elementLocation);
    await I.click(this.iconDel);
  }

  async clickOnButtonComporison() {
    await I.click(this.btnComparison);
  }
}

module.exports = { ComparisonPage };
