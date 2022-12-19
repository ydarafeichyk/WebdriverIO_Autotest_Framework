const { BasePage } = require('../BasePage');
const Waiters = require('../../helpers/waiters');

const I = require('../../helpers/BaseElements');

class CatalogPage extends BasePage {
  constructor() {
    super();
    this.btnVelo = "//a[@itemprop='url']";
    this.mountainVelo = "//a[@href='/catalog/velosipedy/gornye/']//span";
    this.cityVelo = "//a[@href='/catalog/velosipedy/gorodskie/']//span";
    this.teenageVelo = "//a[@href='/catalog/velosipedy/podrostkovye_velosipedy/']//span";
    this.btnCart = "(//a[contains(@class,'addCart changeID')])[2]";
    this.btnGoToCart = "(//span[@class='text'])[2]";
    this.linkCityVelo = "(//span[@class='middle'])[1]";
    this.iconAddWish = "//a[@class='elem addWishlist']";
    this.iconaddCompare = 'a[class="elem addCompare changeID"]';
    this.linkVelo = "(//span[@class='middle'])[3]";
    this.linkAddReview = '.labelDotted';
    this.btnOneClick = '(//a[@class="fastBack label changeID"])[2]';
    this.btnOrder = '#newOrder';
    this.btnSparePart = 'ul#mainMenu>li:nth-of-type(3)';
    this.linkVeloCamera = "//a[@href='/catalog/zapchasti/velosipednye_kamery/']//span";
    this.veloCamera = "//span[text()='Велокамера RavX 28 AV']";
    this.btnPlus = "(//a[@class='plus'])[2]";
    this.amount = "(//input[@class='qty'])[2]";
    this.cartIconWithProductNumber = "span[class='count']";
  }

  async selectProductFromCatalog(section, subsection, product) {
    await I.click(section);
    await I.click(subsection);
    await I.click(product);
  }

  async changeProductQuantity() {
    await I.click(this.btnPlus);
  }

  async addProductToCart(numberOfProduct = '1') {
    await I.click(this.btnCart);
    await I.click(this.btnGoToCart);
    await Waiters.waitTextInElement(this.cartIconWithProductNumber, numberOfProduct);
  }
  async goToCart() {
    await I.click(this.btnCart);
    await I.click(this.btnGoToCart);
  }
  async clickOnButtonOrder() {
    await I.scroll(this.btnOrder);
    await I.click(this.btnOrder);
  }

  async clickAddReviewLink() {
    await I.click(this.linkAddReview);
  }

  async AddWish() {
    await I.click(this.iconAddWish);
  }

  async clickOnButtonOneClick() {
    await I.click(this.btnOneClick);
  }

  async goToCatalogSection(section) {
    await I.click(section);
  }

  async addProductToCompare() {
    await I.click(this.iconaddCompare);
  }
}

module.exports = { CatalogPage };
