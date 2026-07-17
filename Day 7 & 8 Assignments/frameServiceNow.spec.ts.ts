// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("Order Apple iPhone 13 in ServiceNow using Frames", async ({ page }) => {

    // increase the test timeout
    test.setTimeout(120000);

    // navigate to the ServiceNow application
    await page.goto("https://dev284313.service-now.com");

    // enter the username
    await page.locator("#user_name").fill("admin");

    // enter the password
    await page.locator("#user_password").fill("kt%1PCn=P9Tl");

    // click the Login button
    await page.locator("#sysverb_login").click();

    // locate the All menu
    const allMenu = page.locator('div[aria-label="All"]');

    // verify the All menu is visible
    await expect(allMenu).toBeVisible();

    // click the All menu
    await allMenu.click();

    // locate the navigation filter
    const navigationFilter = page.locator("#filter");

    // verify the navigation filter is editable
    await expect(navigationFilter).toBeEditable();

    // enter Service Catalog in the navigation filter
    await navigationFilter.fill("Service Catalog");

    // locate the first matching Service Catalog option
    const serviceCatalog = page.locator("mark.filter-match").first();

    // verify Service Catalog is visible
    await expect(serviceCatalog).toBeVisible();

    // click Service Catalog
    await serviceCatalog.click();

    // locate the main ServiceNow frame
    const serviceNowFrame = page.frameLocator("#gsft_main");

    // locate the Mobiles link
    const mobilesLink = serviceNowFrame.getByRole("link", {
        name: "Mobiles. Cell phones to meet your business needs.",
        exact: true
    });

    // verify the Mobiles link is visible
    await expect(mobilesLink).toBeVisible();

    // click the Mobiles link
    await mobilesLink.click();

    // locate Apple iPhone 13
    const iphone13 = serviceNowFrame.locator(
        "a.service_catalog",
        {
            hasText: "Apple iPhone 13"
        }
    ).first();

    // verify Apple iPhone 13 is visible
    await expect(iphone13).toBeVisible();

    // click Apple iPhone 13
    await iphone13.click();

    // locate the No label for replacement question
    const replacementNoLabel = serviceNowFrame.locator(
        "//label[normalize-space()='No']"
    );

    // verify the No label is visible
    await expect(replacementNoLabel).toBeVisible();

    // click No
    await replacementNoLabel.click();

    // locate the Monthly Data Allowance dropdown
    const monthlyDataAllowance = serviceNowFrame.locator(
        "//div[contains(@class,'sc-row-6')]//select"
    );

    // verify the dropdown is visible
    await expect(monthlyDataAllowance).toBeVisible();

    // select 500 MB option
    await monthlyDataAllowance.selectOption({
        value: "500MB"
    });

    // get the dropdown option count directly from the select element
    const monthlyDataCount = await monthlyDataAllowance.evaluate(
        (dropDown: HTMLSelectElement) => dropDown.options.length
    );

    // print the Monthly Data Allowance count
    console.log(
        "Monthly Data Allowance Count : " + monthlyDataCount
    );

    // verify 500 MB is selected
    await expect(monthlyDataAllowance).toHaveValue("500MB");

    // locate the Green colour radio input
    const greenColourInput = serviceNowFrame.locator(
        "//label[normalize-space()='Green']/preceding-sibling::input"
    );

    // verify Green is selected by default
    await expect(greenColourInput).toBeChecked();

    // locate the Starlight colour label
    const starlightColourLabel = serviceNowFrame.locator(
        "//label[normalize-space()='Starlight']"
    );

    // verify Starlight is visible
    await expect(starlightColourLabel).toBeVisible();

    // click Starlight
    await starlightColourLabel.click();

    // locate the Starlight colour radio input
    const starlightColourInput = serviceNowFrame.locator(
        "//label[normalize-space()='Starlight']/preceding-sibling::input"
    );

    // verify Starlight is selected
    await expect(starlightColourInput).toBeChecked();

    // locate the 128 GB storage radio input
    const storage128GBInput = serviceNowFrame.locator(
        "//label[contains(normalize-space(),'128 GB')]/preceding-sibling::input"
    );

    // verify 128 GB is selected by default
    await expect(storage128GBInput).toBeChecked();

    // locate the 256 GB storage label
    const storage256GBLabel = serviceNowFrame.locator(
        "//label[contains(normalize-space(),'256 GB')]"
    );

    // verify the 256 GB option is visible
    await expect(storage256GBLabel).toBeVisible();

    // click the 256 GB storage option
    await storage256GBLabel.click();

    // locate the 256 GB storage radio input
    const storage256GBInput = serviceNowFrame.locator(
        "//label[contains(normalize-space(),'256 GB')]/preceding-sibling::input"
    );

    // verify 256 GB is selected
    await expect(storage256GBInput).toBeChecked();

    // locate the Order Now button
    const orderNowButton = serviceNowFrame.locator(
        "//button[normalize-space()='Order Now']"
    );

    // verify the Order Now button is visible
    await expect(orderNowButton).toBeVisible();

    // click Order Now
    await orderNowButton.click();

    // locate the order confirmation message
    const orderConfirmation = serviceNowFrame.locator(
        "//span[contains(text(),'Thank you, your request has been submitted')]"
    );

    // verify the order confirmation message is visible
    await expect(orderConfirmation).toBeVisible({
        timeout: 30000
    });

    // print the order confirmation message
    console.log(
        "Order Status : " +
        await orderConfirmation.innerText()
    );

    // get the current URL
    const currentUrl = page.url();

    // print the current URL
    console.log("Current URL : " + currentUrl);

    // verify the current URL contains ServiceNow
    expect(currentUrl).toContain("service-now.com");

    // get the page title
    const pageTitle = await page.title();

    // print the page title
    console.log("Page Title : " + pageTitle);

    // verify the page title contains Order Status
    expect(pageTitle).toMatch(/Order Status:\s*REQ\d+/);

    // wait for demo purpose
    await page.waitForTimeout(3000);

});