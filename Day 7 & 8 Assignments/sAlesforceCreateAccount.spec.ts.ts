// import expect and test from playwright
import { expect, test } from "@playwright/test";

// use the saved Salesforce login session
test.use({
    storageState: "Data/login_salesforce.json"
});

// create a test
test("Create a new Account in Salesforce using Storage State", async ({ page }) => {

    // increase the test timeout for Salesforce
    test.setTimeout(90000);

    // navigate directly to the Salesforce Accounts page
    await page.goto(
        "https://orgfarm-5e9d2f5bc1-dev-ed.develop.lightning.force.com/lightning/o/Account/list"
    );

    // get the page title
    const pageTitle = await page.title();

    // print the page title
    console.log("Page Title : " + pageTitle);

    // verify the page title
    expect(pageTitle).toContain("Lightning Experience");

    // get the current URL
    const currentUrl = page.url();

    // print the current URL
    console.log("Current URL : " + currentUrl);

    // verify the current URL contains Account
    expect(currentUrl).toContain("/Account/");

    // locate the New button
    const newButton = page.getByRole("button", {
        name: "New",
        exact: true
    });

    // verify the New button is visible
    await expect(newButton).toBeVisible({
        timeout: 30000
    });

    // click the New button
    await newButton.click();

    // store the Account Name
    const accountName = "Testleaf Jasmine Account";

    // locate the Account Name textbox
    const accountNameTextbox = page.locator(
        'input[name="Name"]'
    );

    // verify the Account Name textbox is editable
    await expect(accountNameTextbox).toBeEditable({
        timeout: 20000
    });

    // enter the Account Name
    await accountNameTextbox.fill(accountName);

    // locate the Save button
    const saveButton = page.locator(
        '//button[@name="SaveEdit"]'
    );

    // verify the Save button is visible
    await expect(saveButton).toBeVisible();

    // click the Save button
    await saveButton.click();

    // locate the success toast message
    const toastMessage = page.locator(
        '//span[contains(@class,"toastMessage")]'
    );

    // verify the toast message is visible
    await expect(toastMessage).toBeVisible({
        timeout: 20000
    });

    // verify the toast message contains Account
    await expect(toastMessage).toContainText("Account");

    // verify the toast message contains Account Name
    await expect(toastMessage).toContainText(accountName);

    // get the toast message
    const message = await toastMessage.innerText();

    // print the toast message
    console.log("Toast Message : " + message);

    // wait for demo purpose
    await page.waitForTimeout(3000);

});