// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("Create Lead using CSS Selectors and Assertions", async ({ page }) => {

    // load the application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // enter username using id selector
    await page.locator("#username").fill("Demosalesmanager");

    // enter password using id selector
    await page.locator("#password").fill("crmsfa");

    // click login button using class selector
    await page.locator(".decorativeSubmit").click();

    // click CRM/SFA link using href attribute
    await page.locator('[href="/crmsfa/control/main"]').click();

    // click Leads link using href attribute
    await page.locator('[href="/crmsfa/control/leadsMain"]').click();

    // click Create Lead link using href attribute
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click();

    // enter company name
    await page.locator("#createLeadForm_companyName").fill("Testleaf");

    // enter first name
    await page.locator("#createLeadForm_firstName").fill("Jasmine");

    // enter last name
    await page.locator("#createLeadForm_lastName").fill("Wilson");

    // enter salutation
    await page.locator("#createLeadForm_personalTitle").fill("Ms");

    // enter title
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer");

    // enter annual revenue
    await page.locator("#createLeadForm_annualRevenue").fill("50000");

    // enter department
    await page.locator("#createLeadForm_departmentName").fill("QA");

    // enter phone number
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");

    // click Create Lead button
    await page.locator(".smallSubmit").click();

    // locate company name
    const companyName = page.locator("#viewLead_companyName_sp");

    // verify company name is visible
    await expect(companyName).toBeVisible();

    // verify company name contains Testleaf
    await expect(companyName).toContainText("Testleaf");

    // locate first name
    const firstName = page.locator("#viewLead_firstName_sp");

    // verify first name
    await expect(firstName).toHaveText("Jasmine");

    // locate last name
    const lastName = page.locator("#viewLead_lastName_sp");

    // verify last name
    await expect(lastName).toHaveText("Wilson");

    // locate status
    const status = page.locator("#viewLead_statusId_sp");

    // verify status is visible
    await expect(status).toBeVisible();

    // get the page title
    const pageTitle = await page.title();

    // print the page title
    console.log(pageTitle);

    // verify page title
    expect(pageTitle).toBe("View Lead | opentaps CRM");

    // wait for demo purpose
    await page.waitForTimeout(3000);

});