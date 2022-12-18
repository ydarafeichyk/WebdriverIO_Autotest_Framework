const { BasePage } = require('../BasePage');
const I = require('../../helpers/BaseElements');

class CallPage extends BasePage {
  constructor() {
    super();
    this.linkRequestCall = '.openWebFormModal';
    this.inputPhone = 'input[name="form_text_6"]';
    this.inputName = 'input[name="form_text_7"]';
    this.btnSendWebForm = 'input[name="web_form_submit"]';
    this.callMessage = '.webFormMessageHeading';
    this.messageWindow = 'div#webFormMessage_2>div';
    this.checkbox = 'label.label-for';
  }
  async clickOnCallLink() {
    await I.click(this.linkRequestCall);
  }
  async requestCall(phone, name) {
    await I.setValue(this.inputPhone, phone);
    await I.setValue(this.inputName, name);
    await browser.execute(function () {
      return document.querySelector('label.label-for').click();
    });
    await I.click(this.btnSendWebForm);
    await $(this.messageWindow).waitForDisplayed();
  }
}

module.exports = { CallPage };
