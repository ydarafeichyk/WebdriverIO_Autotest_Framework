const { BasePage } = require('../BasePage');
const { CatalogPage } = require('./CatalogPage');
const Waiters = require('../../helpers/waiters');

const I = require('../../helpers/BaseElements');
const catalogPage = new CatalogPage();

class LocationPage extends BasePage {
  constructor() {
    super();
    this.linkLocation = "a[class='user-geo-position-value-link']";
    this.btnGeoLocation = 'a.geo-location-window-button';
    this.inputLocation = 'input.geo-location-window-search-input';
    this.listLocation = 'a.geo-location-list-item-link';
  }
  async getLocation(name) {
    return `//span[text() = "${name}"]`;
  }
  async chooseLocation(cityName, text) {
    await I.click(await this.getLocation(cityName));
    await $(this.btnGeoLocation).waitForDisplayed();
    await I.click(this.btnGeoLocation);
    await I.click(catalogPage.btnVelo);
    await Waiters.waitTextInElement(this.linkLocation, text);
  }
  async chooseLocationByField(city, text) {
    await I.setValue(this.inputLocation, city);
    await I.click(this.listLocation);
    await I.click(this.btnGeoLocation);
    await I.click(catalogPage.btnVelo);
    await Waiters.waitTextInElement(this.linkLocation, text);
  }

  async clickOnLocationLink() {
    await I.click(this.linkLocation);
  }
}

module.exports = { LocationPage };
