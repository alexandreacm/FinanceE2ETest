describe("My first E2E test with detox", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should find a text with Cancel anytime. Ofter terms apply", async () => {
    const info = await element(by.text("Cancel anytime. Ofter terms apply."));
    await expect(info).toBeVisible();
  });

  it("Should subscribe premium plan", async () => {
    await element(by.id("option-premium")).tap();

    //just to test and see our tests with the time
    //new Promise((result) => setTimeout(result, 5000));

    await element(by.id("input-email")).tap();
    await element(by.id("input-email")).typeText(
      "alexandreacm.marques@gmail.com"
    );

    await element(by.id("keyboard")).tap();

    await element(by.id("button-subscribe")).tap();

    await device.takeScreenshot('snapshot-of-select-premium-plan');

    await expect(element(by.id("plan-note"))).toBeVisible();
  });
});
