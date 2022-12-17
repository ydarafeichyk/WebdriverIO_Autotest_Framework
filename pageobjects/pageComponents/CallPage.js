const { BasePage } = require('../BasePage');
const I = require('../../helpers/BaseElements');

class CallPage extends BasePage {
  constructor() {
    super();
    this.link_RequestCall = '.openWebFormModal';
    this.input_Phone = 'input[name="form_text_6"]';
    this.input_Name = 'input[name="form_text_7"]';
    this.btnSendWebForm = 'input[name="web_form_submit"]';
    this.callMessage = '.webFormMessageHeading';
    this.messageWindow = 'div#webFormMessage_2>div';
  }
  async clickOnCallLink() {
    await I.click(this.link_RequestCall);
  }
  async requestCall(phone, name) {
    await I.setValue(this.input_Phone, phone);
    await I.setValue(this.input_Name, name);
    await browser.execute(function () {
      return document.querySelector('label.label-for').click();
    });
    await I.click(this.btnSendWebForm);
    await $(this.messageWindow).waitForDisplayed();
  }
}

module.exports = { CallPage };
