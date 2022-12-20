const { BasePage } = require('./BasePage');
const I = require('../helpers/BaseElements');

class ShoppingCartPage extends BasePage {
  constructor() {
    super();
    this.cartMessage = "//div[@class='heading']";
    this.btnDel = "//a[@class='delete']";
    this.emptyMessage = '//div[@class="info"]//h3';
  }
  async deleteProduct() {
    await I.click(this.btnDel);
  }
}

module.exports = { ShoppingCartPage };
