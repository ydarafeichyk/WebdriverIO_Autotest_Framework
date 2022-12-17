const { BasePage } = require('../BasePage');
const Waiters = require('../../helpers/waiters');

const I = require('../../helpers/BaseElements');

class FavoritesPage extends BasePage {
  constructor() {
    super();
    this.btn_Favorite = "(//span[@class='icon'])[2]";
    this.input_Email = 'input#wishlist-form-email';
    this.btn_SendEmail = 'a#wishlist-form-send';
    this.btn_Send = "a[class='btn-simple btn-black btn-small wishlist-btn sended']";
    this.icon_Del = "(//a[@class='removeFromWishlist'])[1]";
    this.title_Wish = '//h3';
  }
  async sendEmail(email, text = 'Отправлено') {
    await I.scroll(this.input_Email);
    await I.setValue(this.input_Email, email);
    await I.click(this.btn_SendEmail);
    await Waiters.waitTextInElement(this.btn_Send, text);
  }

  async clickOnButtonFavorites() {
    await I.click(this.btn_Favorite);
  }

  async deleteProductFromFavorites() {
    await I.click(this.icon_Del);
    await $(this.title_Wish).waitForDisplayed();
  }
}

module.exports = { FavoritesPage };
