const { BasePage } = require('./BasePage');

const I = require('../helpers/BaseElements');

class OrderPage extends BasePage {
  constructor() {
    super();
    this.inputFastName = '#fastBuyFormName';
    this.inputFastPhone = 'input#fastBuyFormTelephone';
    this.inputMessage = 'textarea#fastBuyFormMessage';
    this.checkbox = '#personalInfoFastBuy';
    this.btnFormSubmit = 'a#fastBuyFormSubmit';
    this.resultTitle = '#fastBuyResultTitle';
    this.btnCity = "(//a[@data-id='252'])[3]";
    this.btnNext = "(//a[@class='pull-right btn btn-default btn-md'])[1]";
    this.inputFirstName = 'input#soa-property-1';
    this.inputEmail = 'input#soa-property-2';
    this.inputPhone = 'input#soa-property-3';
    this.inputAddress = 'textarea#soa-property-7';
    this.inputComment = 'textarea#orderDescription';
    this.btnOrder = 'div#bx-soa-orderSave>a';
    this.orderNumber = "//table[@class='sale_order_full_table']";
  }
  async orderProductInOneClick(name, phone, message) {
    await I.setValue(this.inputFastName, name);
    await $(this.inputFastPhone).waitForClickable();
    await I.setValue(this.inputFastPhone, phone);
    await $(this.inputMessage).waitForClickable();
    await I.setValue(this.inputMessage, message);
    await I.click(this.checkbox);
    await I.click(this.btnFormSubmit);
    await (await $(this.resultTitle)).waitForDisplayed();
  }
  async orderProduct(name, email, phone, address, message) {
    await I.click(this.btnCity);
    await I.scroll(this.btnNext);
    await I.click(this.btnNext);
    await I.scroll(this.btnNext);
    await I.click(this.btnNext);
    await I.setValue(this.inputFirstName, name);
    await I.setValue(this.inputEmail, email);
    await I.setValue(this.inputPhone, phone);
    await I.setValue(this.inputAddress, address);
    await I.setValue(this.inputComment, message);
    await I.click(this.btnNext);
    await I.click(this.btnOrder);
  }
}

module.exports = { OrderPage };
