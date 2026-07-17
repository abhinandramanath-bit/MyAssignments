// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("Create a Lead in Leaftaps", async ({ page }) => {

    // navigate to the Leaftaps application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // enter the username
    await page.locator("#username").fill("Demosalesmanager");

    // enter the password
    await page.locator("#password").fill("crmsfa");

    // click the Login button
    await page.locator(".decorativeSubmit").click();

    // click the CRM/SFA link
    await page.getByText("CRM/SFA", { exact: true }).click();

    // click the Leads link
    await page.getByText("Leads", { exact: true }).click();

    // click the Create Lead link
    await page.getByText("Create Lead", { exact: true }).click();

    // store the company name
    const companyName = "Testleaf";

    // enter the company name
    await page.locator("#createLeadForm_companyName").fill(companyName);

    // store the first name
    const firstName = "Jasmine";

    // enter the first name
    await page.locator("#createLeadForm_firstName").fill(firstName);

    // store the last name
    const lastName = "Wilson";

    // enter the last name
    await page.locator("#createLeadForm_lastName").fill(lastName);

    // enter the salutation
    await page.locator("#createLeadForm_personalTitle").fill("Ms");

    // enter the title
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer");

    // enter the annual revenue
    await page.locator("#createLeadForm_annualRevenue").fill("50000");

    // enter the department
    await page.locator("#createLeadForm_departmentName").fill("Quality Assurance");

    // enter the phone number
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");

    // click the Create Lead button
    await page.locator(".smallSubmit").click();

    // locate the company name displayed on the View Lead page
    const displayedCompanyName = page.locator("#viewLead_companyName_sp");

    // verify the company name is visible
    await expect(displayedCompanyName).toBeVisible();

    // verify the company name
    await expect(displayedCompanyName).toContainText(companyName);

    // locate the first name displayed on the View Lead page
    const displayedFirstName = page.locator("#viewLead_firstName_sp");

    // verify the first name
    await expect(displayedFirstName).toHaveText(firstName);

    // locate the last name displayed on the View Lead page
    const displayedLastName = page.locator("#viewLead_lastName_sp");

    // verify the last name
    await expect(displayedLastName).toHaveText(lastName);

    // locate the status displayed on the View Lead page
    const leadStatus = page.locator("#viewLead_statusId_sp");

    // verify the lead status is visible
    await expect(leadStatus).toBeVisible();

    // get the page title
    const pageTitle = await page.title();

    // print the page title
    console.log("Page Title : " + pageTitle);

    // wait for demo purpose
    await page.waitForTimeout(3000);

});