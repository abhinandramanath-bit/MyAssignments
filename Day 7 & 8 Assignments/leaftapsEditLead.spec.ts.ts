// import expect and test from playwright
import { expect, test } from "@playwright/test";

// create a test
test("Edit a Lead in Leaftaps", async ({ page }) => {

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
    await page.getByRole("link", {
        name: "Leads",
        exact: true
    }).click();

    // click the Find Leads link
    await page.getByRole("link", {
        name: "Find Leads",
        exact: true
    }).click();

    // enter the first name
    await page.locator("(//input[@name='firstName'])[3]").fill("Jasmine");

    // click the Find Leads button
    await page.getByRole("button", {
        name: "Find Leads",
        exact: true
    }).click();

    // locate the first Lead ID
    const firstLeadId = page.locator(
        "//div[contains(@class,'x-grid3-col-partyId')]/a"
    ).first();

    // wait until the first Lead ID is visible
    await expect(firstLeadId).toBeVisible();

    // click the first Lead ID
    await firstLeadId.click();

    // click the Edit link
    await page.getByRole("link", {
        name: "Edit",
        exact: true
    }).click();

    // store the updated company name
    const updatedCompanyName = "Testleaf Technologies";

    // edit the company name
    await page
        .locator("#updateLeadForm_companyName")
        .fill(updatedCompanyName);

    // store the updated annual revenue
    const updatedAnnualRevenue = "75000";

    // edit the annual revenue
    await page
        .locator("#updateLeadForm_annualRevenue")
        .fill(updatedAnnualRevenue);

    // store the expected annual revenue
    const expectedAnnualRevenue = "$75,000.00";

    // store the updated department
    const updatedDepartment = "Automation Testing";

    // edit the department
    await page
        .locator("#updateLeadForm_departmentName")
        .fill(updatedDepartment);

    // store the description
    const updatedDescription = "Lead updated using Playwright";

    // enter the description
    await page
        .locator("#updateLeadForm_description")
        .fill(updatedDescription);

    // click the Update button
    await page.getByRole("button", {
        name: "Update",
        exact: true
    }).click();

    // locate the updated company name
    const displayedCompanyName = page.locator(
        "#viewLead_companyName_sp"
    );

    // verify the updated company name is visible
    await expect(displayedCompanyName).toBeVisible();

    // verify the updated company name
    await expect(displayedCompanyName).toContainText(
        updatedCompanyName
    );

    // locate the updated annual revenue
    const displayedAnnualRevenue = page.locator(
        "#viewLead_annualRevenue_sp"
    );

    // verify the updated annual revenue is visible
    await expect(displayedAnnualRevenue).toBeVisible();

    // verify the formatted annual revenue
    await expect(displayedAnnualRevenue).toHaveText(
        expectedAnnualRevenue
    );

    // locate the updated department
    const displayedDepartment = page.locator(
        "#viewLead_departmentName_sp"
    );

    // verify the updated department is visible
    await expect(displayedDepartment).toBeVisible();

    // verify the updated department
    await expect(displayedDepartment).toHaveText(
        updatedDepartment
    );

    // locate the updated description
    const displayedDescription = page.locator(
        "#viewLead_description_sp"
    );

    // verify the updated description is visible
    await expect(displayedDescription).toBeVisible();

    // verify the updated description
    await expect(displayedDescription).toHaveText(
        updatedDescription
    );

    // get the page title
    const pageTitle = await page.title();

    // print the page title
    console.log("Page Title : " + pageTitle);

    // verify the page title contains View Lead
    expect(pageTitle).toContain("View Lead");

    // wait for demo purpose
    await page.waitForTimeout(3000);

});