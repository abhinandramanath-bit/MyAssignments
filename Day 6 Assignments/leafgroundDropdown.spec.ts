// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("LeafGround Dropdown Assignment", async ({ page }) => {

    // load the application
    await page.goto("https://leafground.com/select.xhtml");

    // select your favorite UI automation tool using index
    await page.selectOption('//select[@class="ui-selectonemenu"]', { index: 2 });

    // locate all UI automation tool values
    const toolValues = page.locator('(//select[@class="ui-selectonemenu"]/option)');

    // get the dropdown count
    const toolCount = await toolValues.count();

    // print all dropdown values
    for (let index = 1; index <= toolCount; index++) {

        console.log(await page.locator(`(//select[@class="ui-selectonemenu"]/option)[${index}]`).innerText());

    }

    // click Select Country dropdown
    await page.locator('//label[text()="Select Country"]').click();

    // choose India
    await page.locator('//li[text()="India"]').click();

    // verify Cities dropdown is enabled
    await expect(page.locator('//label[text()="Select City"]')).toBeVisible();

    // click Select City dropdown
    await page.locator('//label[text()="Select City"]').click();

    // choose Chennai
    await page.locator('//li[text()="Chennai"]').click();

    // click Choose Course dropdown
    await page.locator('//label[text()="Choose Course"]').click();

    // choose Selenium WebDriver
    await page.locator('//li[text()="Selenium WebDriver"]').click();

    // choose Playwright
    await page.locator('//li[text()="Playwright"]').click();

    // choose Rest Assured
    await page.locator('//li[text()="Rest Assured"]').click();

    // click Language dropdown
    await page.locator('//label[text()="Choose Language"]').click();

    // choose English
    await page.locator('//li[text()="English"]').click();

    // click Select Values dropdown
    await page.locator('//label[text()="Select Values"]').click();

    // locate all values
    const languageValues = page.locator('//ul[@role="listbox"]/li');

    // get the values count
    const languageCount = await languageValues.count();

    // print all values
    for (let index = 1; index <= languageCount; index++) {

        console.log(await page.locator(`(//ul[@role="listbox"]/li)[${index}]`).innerText());

    }

    // choose Two
    await page.locator('//li[text()="Two"]').click();

    // wait for demo purpose
    await page.waitForTimeout(3000);

});