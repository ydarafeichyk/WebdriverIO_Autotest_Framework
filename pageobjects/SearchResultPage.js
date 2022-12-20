const { BasePage } = require('./BasePage');

class SearchResultPage extends BasePage {
  constructor() {
    super();
    this.titleSearch = '//div[@class="rightColumn"]//h3';
  }
}

module.exports = { SearchResultPage };
