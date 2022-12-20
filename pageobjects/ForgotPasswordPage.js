const { BasePage } = require('./BasePage');

class ForgotPasswordPage extends BasePage {
  constructor() {
    super();
    this.passwordMessage = '//div[@class="limiter"]//h1';
  }
}

module.exports = { ForgotPasswordPage };
