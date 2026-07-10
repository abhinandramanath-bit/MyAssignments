// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("Validate Textbox Assertions", async ({ page }) => {

    // load the application
    await page.goto("https://leafground.com/input.xhtml");

    // locate the disabled textbox
    const disabledTextbox = page.locator('//input[@placeholder="Disabled"]');

    // verify the textbox is disabled
    await expect(disabledTextbox).toBeDisabled();

    // locate the enabled textbox
    const enabledTextbox = page.locator('//input[@placeholder="Type your name"]');

    // verify the textbox is editable
    await expect(enabledTextbox).toBeEditable();

    // enter your name
    await enabledTextbox.fill("Jasmine");

    // locate another enabled textbox
    const softAssertionTextbox = page.locator('//input[@placeholder="Type your name"]');

    // perform soft assertion
    await expect.soft(softAssertionTextbox).toBeDisabled();

    // wait for demo purpose
    await page.waitForTimeout(3000);

});