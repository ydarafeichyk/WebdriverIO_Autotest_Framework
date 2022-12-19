const { BasePage } = require('../BasePage');
const Waiters = require('../../helpers/waiters');

const I = require('../../helpers/BaseElements');

class FavoritesPage extends BasePage {
  constructor() {
    super();
    this.btnFavorite = "(//a[@href='/wishlist/'])[1]";
    this.inputEmail = 'input#wishlist-form-email';
    this.btnSendEmail = 'a#wishlist-form-send';
    this.btnSend = "a[class='btn-simple btn-black btn-small wishlist-btn sended']";
    this.iconDel = "(//a[@class='removeFromWishlist'])[1]";
    this.titleWish = '//h3[text()="В избранном пока пусто"]';
  }
  async sendEmail(email, text = 'Отправлено') {
    await I.scroll(this.inputEmail);
    await I.setValue(this.inputEmail, email);
    await I.click(this.btnSendEmail);
    await Waiters.waitTextInElement(this.btnSend, text);
  }

  async clickOnButtonFavorites() {
    await I.click(this.btnFavorite);
  }

  async deleteProductFromFavorites() {
    await I.click(this.iconDel);
    await $(this.titleWish).waitForDisplayed();
  }
}

module.exports = { FavoritesPage };
