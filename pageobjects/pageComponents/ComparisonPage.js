const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class ComparisonPage extends BasePage {
  constructor() {
    super();
    this.btn_Comparison = "(//span[@class='icon'])[1]";
    this.element_location = '.imgBlock';
    this.iconDel = "ins[data-id='3441']";
    this.title_Compare = '//h3';
  }

  async removeFromComparison() {
    await I.scrollToElement(this.element_location);
    await I.click(this.iconDel);
  }

  async clickOnButtonComporison() {
    await I.click(this.btn_Comparison);
  }
}

module.exports = { ComparisonPage };
