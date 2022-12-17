const { BasePage } = require('../BasePage');

const I = require('../../helpers/BaseElements');

class LocationPage extends BasePage {
  constructor() {
    super();
    this.link_location = "a[class='user-geo-position-value-link']";
    this.btn_geoLocation = 'a.geo-location-window-button';
    this.input_Location = 'input.geo-location-window-search-input';
    this.list_Location = 'a.geo-location-list-item-link';
  }
  async getLocation(name) {
    return `//span[text() = "${name}"]`;
  }
  async chooseLocation(cityName) {
    await $(await this.getLocation(cityName)).click();
    await $(this.btn_geoLocation).waitForDisplayed();
    await I.click(this.btn_geoLocation);
    await browser.pause(50);
  }

  async chooseLocationByField(city) {
    await I.setValue(this.input_Location, city);
    await I.click(this.list_Location);
    await I.click(this.btn_geoLocation);
    await browser.pause(50);
  }

  async clickOnLocationLink() {
    await I.click(this.link_location);
  }
}

module.exports = { LocationPage };
