const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class SearchPage extends BasePage {
  constructor() {
    super();
    this.inputSearchField = '#searchQuery';
    this.priceMin = 'input[id="arrFilter_P1_MIN"]';
    this.priceMax = 'input[id="arrFilter_P1_MAX"]';
    this.brandStels = "label[data-role='label_arrFilter_52_1463075569']";
    this.cityClass = "//label[@data-role='label_arrFilter_99_3994858278']";
    this.btnShow = '#modef_send';
  }
  async searchByBrand(brand) {
    await I.click(this.inputSearchField);
    await I.setValue(this.inputSearchField, brand);
    await browser.keys('Enter');
  }

  async indicatePrice(min, max) {
    await I.scroll(this.priceMin);
    await I.setValue(this.priceMin, min);
    await I.setValue(this.priceMax, max);
  }
  async indicateBrand() {
    await I.scroll(this.brandStels);
    await I.click(this.brandStels);
  }

  async indicateClass() {
    await I.scroll(this.cityClass);
    await I.click(this.cityClass);
  }

  async showSelected() {
    await $(this.btnShow).waitForDisplayed();
    await I.click(this.btnShow);
  }
}

module.exports = { SearchPage };
