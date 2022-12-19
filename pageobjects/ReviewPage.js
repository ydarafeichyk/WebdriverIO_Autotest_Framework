const { BasePage } = require('./BasePage');
const I = require('../helpers/BaseElements');

class ReviewPage extends BasePage {
  constructor() {
    super();
    this.experience = "//a[@data-id='5']";
    this.inputAdvantage = "textarea[name='DIGNITY']";
    this.inputDisadvantage = "textarea[name='SHORTCOMINGS']";
    this.inputComment = "textarea[name='COMMENT']";
    this.inputName = "input[name='NAME']";
    this.btnSubmit = "//a[@class='submit']";
    this.reviewMessage = "//span[text()='Отзыв добавлен']";
    this.errorMessage = "//p[text()='Заполните все поля!']";
    this.starsRating = "span[class='rating']";
  }
  async addReview(advantage, disadvantage, impession, name) {
    await browser.execute(function () {
      return document.querySelector("span[class='rating']").click();
    });
    await I.click(this.experience);
    await I.setValue(this.inputAdvantage, advantage);
    await I.setValue(this.inputDisadvantage, disadvantage);
    await I.setValue(this.inputComment, impession);
    await I.setValue(this.inputName, name);
    await I.click(this.btnSubmit);
  }

  async addReviewWithautField(advantage, disadvantage, impession, name) {
    await I.click(this.experience);
    await I.setValue(this.inputAdvantage, advantage);
    await I.setValue(this.inputDisadvantage, disadvantage);
    await I.setValue(this.inputComment, impession);
    await I.setValue(this.inputName, name);
    await I.click(this.btnSubmit);
  }
}

module.exports = { ReviewPage };
