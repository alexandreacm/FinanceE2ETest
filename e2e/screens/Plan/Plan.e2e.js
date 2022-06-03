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
    await element(by.id("option-premium")).tap(); //click

    //just to test and see our tests with the time
    //new Promise((result) => setTimeout(result, 5000));

    await element(by.id("button-subscribe")).tap();

    await element(by.id("input-email")).tap(); //focus
    await element(by.id("input-email")).typeText(
      "alexandreacm.marques@gmail.com"
    );

    await element(by.id("TouchableWithoutKeyboard")).tap(); //click

    await element(by.id("button-subscribe")).tap(); //click

    await device.takeScreenshot("snapshot-of-select-premium-plan");

    await expect(element(by.id("confirmation-message"))).toBeVisible();
  });

  test("Should test email validation", async () => {
    await element(by.id("option-premium")).tap();
    await element(by.id("input-email")).tap(); //focus

    await element(by.id("TouchableWithoutKeyboard")).tap(); //close keyboard
    await element(by.id("button-subscribe")).tap(); //onPress

    const errorEmail = await element(by.text("Email is required"));

    await expect(errorEmail).toBeVisible();
  });

  test("Should testing if the price is 6.99 for premium account", async () => {
    await element(by.id("option-premium")).tap();
    await element(by.id("input-email")).tap(); //focus

    await element(by.id("TouchableWithoutKeyboard")).tap(); //close keyboard
    await element(by.id("button-subscribe")).tap(); //onPress

    const price = await element(by.text("6.99"));

    await expect(price).toBeVisible();
  });
});
