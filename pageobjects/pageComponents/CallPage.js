const { BasePage } = require('../BasePage');
const I = require('../../helpers/BaseElements');

class CallPage extends BasePage {
  constructor() {
    super();
    this.link_RequestCall = '.openWebFormModal';
    this.input_Phone = "(//input[@class='inputtext'])[1]";
    this.input_Name = "(//input[@class='inputtext'])[2]";
    this.btnSendWebForm = "(//input[@class='sendWebFormDw'])[1]";
    this.callMessage = '.webFormMessageHeading';
    this.messageWindow = 'div#webFormMessage_2>div';
  }

  async requestCall(phone, name) {
    await I.setValue(this.input_Phone, phone);
    await I.setValue(this.input_Name, name);
    await browser.execute(function () {
      return document.querySelector('label.label-for').click();
    });
    await I.click(this.btnSendWebForm);
  }
}

module.exports = { CallPage };
