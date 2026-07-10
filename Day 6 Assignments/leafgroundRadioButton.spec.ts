// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("LeafGround Radio Button Assignment", async ({ page }) => {

    // load the application
    await page.goto("https://leafground.com/radio.xhtml");

    // locate the default selected radio button
    const defaultRadioButton = page.locator('//input[@id="j_idt87:console1:0"]');

    // verify the default radio button is selected
    await expect(defaultRadioButton).toBeChecked();

    // click your favorite browser
    await page.locator('//label[text()="Chrome"]').click();

    // locate the Chrome radio button
    const chromeRadioButton = page.locator('//input[@id="j_idt87:console2:0"]');

    // verify the Chrome radio button is selected
    await expect(chromeRadioButton).toBeChecked();

    // click Bengaluru city
    await page.locator('//label[text()="Bengaluru"]').click();

    // locate Bengaluru radio button
    const bengaluruRadioButton = page.locator('//input[@value="Bengaluru"]');

    // verify Bengaluru radio button is selected
    await expect(bengaluruRadioButton).toBeChecked();

    // locate the default selected age group
    const defaultAgeGroup = page.locator('//input[@name="j_idt87:age" and @checked="checked"]');

    // verify the default age group is selected
    await expect(defaultAgeGroup).toBeChecked();

    // click age group 21-40 Years
    await page.locator('//label[text()="21-40 Years"]').click();

    // locate age group 21-40 Years
    const ageGroup = page.locator('//input[@value="21-40 Years"]');

    // verify age group 21-40 Years is selected
    await expect(ageGroup).toBeChecked();

    // wait for demo purpose
    await page.waitForTimeout(3000);

});