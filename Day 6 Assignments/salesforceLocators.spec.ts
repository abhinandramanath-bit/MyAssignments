// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("Salesforce Create Lead", async ({ page }) => {

    // 1. Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com");

    // enter username
    await page.locator("#username").fill(
        "abhinandramanath.46aa381d4374@agentforce.com"
    );

    // enter password from environment variable
    await page.locator("#password").fill(
        process.env.Abcd123$
    );

    // click Login button
    await page.locator("#Login").click();

    // locate the App Launcher button
    const appLauncher = page.locator(
        "//button[@title='App Launcher']"
    );

    // wait until login is completed
    await expect(appLauncher).toBeVisible({
        timeout: 30000
    });

    // 2. Click the App Launcher button
    await appLauncher.click();

    // locate View All button
    const viewAllButton = page.locator(
        "//button[text()='View All']"
    );

    // verify View All button is visible
    await expect(viewAllButton).toBeVisible();

    // 3. Click View All button
    await viewAllButton.click();

    // locate Sales application
    const salesApplication = page.locator(
        "//p[text()='Sales']"
    );

    // verify Sales application is visible
    await expect(salesApplication).toBeVisible();

    // click Sales application
    await salesApplication.click();

    // 4. Locate Leads tab
    const leadsTab = page.locator(
        "a[title='Leads']"
    );

    // verify Leads tab is visible
    await expect(leadsTab).toBeVisible();

    // click Leads tab
    await leadsTab.click();

    // 5. Locate New button
    const newButton = page.locator(
        "button[name='New']"
    );

    // verify New button is visible
    await expect(newButton).toBeVisible();

    // click New button
    await newButton.click();

    // 6. Click Salutation dropdown
    await page.locator(
        "button[name='salutation']"
    ).click();

    // select Mr. from Salutation dropdown
    await page.getByRole("option", {
        name: "Mr."
    }).click();

    // store the Last Name
    const lastName = "Wilson";

    // 7. Enter the Last Name
    await page.locator(
        "input[name='lastName']"
    ).fill(lastName);

    // store the Company Name
    const companyName = "Testleaf";

    // 8. Enter the Company Name
    await page.locator(
        "input[name='Company']"
    ).fill(companyName);

    // 9. Click Save button
    await page.locator(
        "button[name='SaveEdit']"
    ).click();

    // locate the success toast message
    const toastMessage = page.locator(
        "//span[contains(@class,'toastMessage')]"
    );

    // verify the success toast message is visible
    await expect(toastMessage).toBeVisible();

    // verify the toast message contains Lead
    await expect(toastMessage).toContainText("Lead");

    // verify the toast message contains the Last Name
    await expect(toastMessage).toContainText(lastName);

    // get the success message
    const message = await toastMessage.innerText();

    // print the success message
    console.log(message);

    // wait for demo purpose
    await page.waitForTimeout(3000);

});
