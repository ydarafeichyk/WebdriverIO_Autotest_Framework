class Waiters {
  static async waitTextInElement(selector, text, includes = false) {
    const actualText = await $(selector).getText();
    await browser.waitUntil(
      async () => (includes ? (await actualText).includes(text) : (await actualText).trim() === text),
      {
        timeout: 10000,
        timeoutMsg: `Expected text:${text} in selector: ${selector} to be different after timeout. Actual text:${actualText}`,
      },
    );
  }
}

module.exports = Waiters;
