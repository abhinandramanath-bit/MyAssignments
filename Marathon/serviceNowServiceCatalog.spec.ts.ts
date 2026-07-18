// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("Search Product and Add to Cart in ServiceNow", async ({ page }) => {

    // increase the timeout for ServiceNow
    test.setTimeout(180000);

    // navigate to the ServiceNow application
    await page.goto("https://dev419732.service-now.com/");

    // enter the username
    await page.locator("#user_name").fill("admin");

    // enter the password
    await page.locator("#user_password").fill("xcAK8%DT6x^x");

    // click the Login button
    await page.locator("#sysverb_login").click();

    // locate the All menu
    const allMenu = page.locator('div[aria-label="All"]');

    // verify the All menu is visible
    await expect(allMenu).toBeVisible({
        timeout: 30000
    });

    // click the All menu
    await allMenu.click();

    // locate the navigation filter
    const navigationFilter = page.locator("#filter");

    // verify the navigation filter is editable
    await expect(navigationFilter).toBeEditable();

    // enter Service Catalog
    await navigationFilter.fill("Service Catalog");

    // locate the first matching Service Catalog option
    const serviceCatalogOption = page.locator(
        "mark.filter-match"
    ).first();

    // verify Service Catalog is visible
    await expect(serviceCatalogOption).toBeVisible({
        timeout: 30000
    });

    // click Service Catalog
    await serviceCatalogOption.click();

    // locate the ServiceNow main frame
    const serviceNowFrame = page.frameLocator("#gsft_main");

    // locate the Mobiles category
    const mobilesCategory = serviceNowFrame.getByRole("link", {
        name: "Mobiles. Cell phones to meet your business needs.",
        exact: true
    });

    // verify the Mobiles category is visible
    await expect(mobilesCategory).toBeVisible({
        timeout: 30000
    });

    // click the Mobiles category
    await mobilesCategory.click();

    // locate Apple iPhone 13 Pro
    const iphone13Pro = serviceNowFrame.locator(
        "a.service_catalog",
        {
            hasText: "Apple iPhone 13 Pro"
        }
    ).first();

    // verify Apple iPhone 13 Pro is visible
    await expect(iphone13Pro).toBeVisible({
        timeout: 30000
    });

    // click Apple iPhone 13 Pro
    await iphone13Pro.click();

    // wait until the product configuration page finishes loading
    await expect(serviceNowFrame.getByRole("heading", {
        name: /Request for Apple iPhone 13 pro/i
    })).toBeVisible({
        timeout: 30000
    });

    // locate the No option for replacement question
    const replacementNoOption = serviceNowFrame.getByRole("radio", {
        name: /No/
    });

    // verify the No option is visible
    await expect(replacementNoOption).toBeVisible({ timeout: 30000 });

    // select No
    await serviceNowFrame.locator("label").filter({
        hasText: /^No$/
    }).click();
    await expect(replacementNoOption).toBeChecked();

    // locate the Monthly Data Allowance dropdown
    const monthlyDataAllowance = serviceNowFrame.locator(
        "//div[contains(@class,'sc-row-6')]//select"
    );

    // verify the Monthly Data Allowance dropdown is visible
    await expect(monthlyDataAllowance).toBeVisible({ timeout: 30000 });

    // get the total option count
    const monthlyDataCount = await monthlyDataAllowance.locator(
        "option"
    ).count();

    // print the Monthly Data Allowance count
    console.log(
        "Monthly Data Allowance Count : " + monthlyDataCount
    );

    // select 500 MB
    await monthlyDataAllowance.selectOption({
        value: "500MB"
    });

    // verify 500 MB is selected
    await expect(monthlyDataAllowance).toHaveValue("500MB");

    // select Silver, which is available for the current iPhone 13 Pro
    const silverColour = serviceNowFrame.getByRole("radio", {
        name: /Silver/
    });
    await expect(silverColour).toBeVisible({ timeout: 30000 });
    await serviceNowFrame.locator("label").filter({
        hasText: /^Silver$/
    }).click();
    await expect(silverColour).toBeChecked();

    // select the 256 GB storage option
    const storage256GB = serviceNowFrame.getByRole("radio", {
        name: /256 GB/
    });
    await expect(storage256GB).toBeVisible({ timeout: 30000 });
    await serviceNowFrame.locator("label").filter({
        hasText: /^256 GB/
    }).click();
    await expect(storage256GB).toBeChecked();

    // locate the Order Now button
    const orderNowButton = serviceNowFrame.getByRole("button", {
        name: "Order Now",
        exact: true
    });

    // verify the Order Now button is visible
    await expect(orderNowButton).toBeVisible();

    // click the Order Now button
    await orderNowButton.click();

    // locate the order confirmation message
    const orderConfirmation = serviceNowFrame.locator(
        "//span[contains(text(),'Thank you, your request has been submitted')]"
    );

    // verify the order confirmation message is visible
    await expect(orderConfirmation).toBeVisible({
        timeout: 30000
    });

    // get the order confirmation message
    const confirmationMessage =
        await orderConfirmation.innerText();

    // print the order confirmation message
    console.log(
        "Order Confirmation : " + confirmationMessage
    );

    // take the full-page screenshot
    await page.screenshot({
        path: "screenshots/serviceNowOrderConfirmation.png",
        fullPage: true
    });

    // get the current page title
    const pageTitle = await page.title();

    // print the page title
    console.log("Page Title : " + pageTitle);

    // verify the page title is not empty
    expect(pageTitle).not.toBe("");

    // get the current page URL
    const currentUrl = page.url();

    // print the current page URL
    console.log("Current URL : " + currentUrl);

    // verify the URL contains ServiceNow
    expect(currentUrl).toContain("service-now.com");

    // wait for demo purpose
    await page.waitForTimeout(3000);

});
