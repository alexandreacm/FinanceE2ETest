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
});
