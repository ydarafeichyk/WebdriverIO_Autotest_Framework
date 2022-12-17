const { BasePage } = require('./BasePage');

class SearchResultPage extends BasePage {
  constructor() {
    super();
    this.title_Search = '//div[@class="rightColumn"]//h3';
  }
}

module.exports = { SearchResultPage };
