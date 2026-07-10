// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("LeafGround Checkbox Assignment", async ({ page }) => {

    // load the application
    await page.goto("https://leafground.com/checkbox.xhtml");

    // click the Basic Checkbox
    await page.locator('(//div[contains(@class,"ui-chkbox-box")])[1]').click();

    // click the Notification Checkbox
    await page.locator('(//div[contains(@class,"ui-chkbox-box")])[2]').click();

    // locate the notification message
    const notificationMessage = page.locator('//span[@class="ui-growl-title"]');

    // verify the notification message is displayed
    await expect(notificationMessage).toBeVisible();

    // print the notification message
    console.log(await notificationMessage.innerText());

    // click your favorite language
    await page.locator('//label[text()="Java"]/preceding-sibling::div').click();

    // click the Tri-State Checkbox
    await page.locator('(//div[contains(@class,"ui-chkbox-box")])[5]').click();

    // locate the tri-state message
    const triStateMessage = page.locator('//p[contains(@class,"mt-2")]');

    // verify the tri-state message is displayed
    await expect(triStateMessage).toBeVisible();

    // print the selected tri-state option
    console.log(await triStateMessage.innerText());

    // click the Toggle Switch
    await page.locator('//div[contains(@class,"ui-toggleswitch-slider")]').click();

    // locate the toggle message
    const toggleMessage = page.locator('//span[@class="ui-growl-title"]');

    // verify the toggle message is displayed
    await expect(toggleMessage).toBeVisible();

    // print the toggle message
    console.log(await toggleMessage.innerText());

    // locate the disabled checkbox
    const disabledCheckbox = page.locator('//input[@disabled]');

    // verify the checkbox is disabled
    await expect(disabledCheckbox).toBeDisabled();

    // click Miami checkbox
    await page.locator('//label[text()="Miami"]/preceding-sibling::div').click();

    // click Berlin checkbox
    await page.locator('//label[text()="Berlin"]/preceding-sibling::div').click();

    // click London checkbox
    await page.locator('//label[text()="London"]/preceding-sibling::div').click();

    // wait for demo purpose
    await page.waitForTimeout(3000);

});