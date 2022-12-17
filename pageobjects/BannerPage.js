const { BasePage } = require('./BasePage');

class BannerPage extends BasePage {
  constructor() {
    super();
    this.contentPage = 'div#main>div>h1';
  }
}

module.exports = { BannerPage };
