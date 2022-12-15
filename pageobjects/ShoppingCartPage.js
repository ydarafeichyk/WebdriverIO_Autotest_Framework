const { BasePage } = require('./BasePage');
const I = require('../helpers/BaseElements');

class ShoppingCartPage extends BasePage {
  constructor() {
    super();
    this.cartMessage = "(//div[@class='heading'])[1]";
    this.btnDel = "(//a[@class='delete'])[1]";
    this.emptyMessage = '//h3';
  }
  async deleteProduct() {
    await I.click(this.btnDel);
  }
}

module.exports = { ShoppingCartPage };
