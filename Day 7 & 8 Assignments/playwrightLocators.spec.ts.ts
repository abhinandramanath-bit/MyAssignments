// import expect and test from playwright
import { expect, test } from "@playwright/test";


// Assignment 1 - Create Lead

test("Create a Lead using different locator strategies", async ({ page }) => {

    // navigate to the Leaftaps application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // enter the username using id selector
    await page.locator("#username").fill("Demosalesmanager");

    // enter the password using id selector
    await page.locator("#password").fill("crmsfa");

    // click the Login button using class selector
    await page.locator(".decorativeSubmit").click();

    // click CRM/SFA using getByText
    await page.getByText("CRM/SFA", {
        exact: true
    }).click();

    // click Leads using getByRole
    await page.getByRole("link", {
        name: "Leads",
        exact: true
    }).click();

    // click Create Lead using getByRole
    await page.getByRole("link", {
        name: "Create Lead",
        exact: true
    }).click();

    // store the Company Name
    const companyName = "Testleaf";

    // enter the Company Name using id selector
    await page.locator("#createLeadForm_companyName").fill(
        companyName
    );

    // store the First Name
    const firstName = "Jasmine";

    // enter the First Name using id selector
    await page.locator("#createLeadForm_firstName").fill(
        firstName
    );

    // store the Last Name
    const lastName = "Wilson";

    // enter the Last Name using id selector
    await page.locator("#createLeadForm_lastName").fill(
        lastName
    );

    // enter the Salutation
    await page.locator("#createLeadForm_personalTitle").fill(
        "Ms"
    );

    // enter the Title
    await page.locator("#createLeadForm_generalProfTitle").fill(
        "QA Engineer"
    );

    // enter the Annual Revenue
    await page.locator("#createLeadForm_annualRevenue").fill(
        "50000"
    );

    // enter the Department
    await page.locator("#createLeadForm_departmentName").fill(
        "Quality Assurance"
    );

    // enter the Phone Number
    await page.locator("#createLeadForm_primaryPhoneNumber").fill(
        "9876543210"
    );

    // locate the Create Lead submit button
    const createLeadButton = page.locator(
        'input[name="submitButton"][value="Create Lead"]'
    );

    // verify the Create Lead button is visible
    await expect(createLeadButton).toBeVisible();

    // click the Create Lead button
    await createLeadButton.click();

    // locate the displayed Company Name
    const displayedCompanyName = page.locator(
        "#viewLead_companyName_sp"
    );

    // verify the Company Name
    await expect(displayedCompanyName).toContainText(
        companyName
    );

    // locate the displayed First Name
    const displayedFirstName = page.locator(
        "#viewLead_firstName_sp"
    );

    // verify the First Name
    await expect(displayedFirstName).toHaveText(
        firstName
    );

    // locate the displayed Last Name
    const displayedLastName = page.locator(
        "#viewLead_lastName_sp"
    );

    // verify the Last Name
    await expect(displayedLastName).toHaveText(
        lastName
    );

    // locate the Lead Status
    const leadStatus = page.locator(
        "#viewLead_statusId_sp"
    );

    // verify the Lead Status is visible
    await expect(leadStatus).toBeVisible();

    // get the page title
    const pageTitle = await page.title();

    // print the page title
    console.log("Create Lead Title : " + pageTitle);

    // verify the page title
    expect(pageTitle).toContain("View Lead");

});


// Assignment 2 - Edit Lead

test("Edit a Lead using different locator strategies", async ({ page }) => {

    // navigate to the Leaftaps application
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // enter the username
    await page.locator("#username").fill("Demosalesmanager");

    // enter the password
    await page.locator("#password").fill("crmsfa");

    // click the Login button
    await page.locator(".decorativeSubmit").click();

    // click CRM/SFA
    await page.getByText("CRM/SFA", {
        exact: true
    }).click();

    // click Leads
    await page.getByRole("link", {
        name: "Leads",
        exact: true
    }).click();

    // click Find Leads link
    await page.getByRole("link", {
        name: "Find Leads",
        exact: true
    }).click();

    // enter the First Name
    await page.locator(
        "(//input[@name='firstName'])[3]"
    ).fill("Jasmine");

    // click Find Leads button
    await page.getByRole("button", {
        name: "Find Leads",
        exact: true
    }).click();

    // locate the first Lead ID
    const firstLeadId = page.locator(
        "//div[contains(@class,'x-grid3-col-partyId')]/a"
    ).first();

    // verify the first Lead ID is visible
    await expect(firstLeadId).toBeVisible();

    // click the first Lead ID
    await firstLeadId.click();

    // click Edit
    await page.getByRole("link", {
        name: "Edit",
        exact: true
    }).click();

    // store the updated Company Name
    const updatedCompanyName = "Testleaf Technologies";

    // update the Company Name
    await page.locator("#updateLeadForm_companyName").fill(
        updatedCompanyName
    );

    // update the Annual Revenue
    await page.locator("#updateLeadForm_annualRevenue").fill(
        "75000"
    );

    // store the updated Department
    const updatedDepartment = "Automation Testing";

    // update the Department
    await page.locator("#updateLeadForm_departmentName").fill(
        updatedDepartment
    );

    // store the Description
    const updatedDescription = "Lead updated using Playwright";

    // enter the Description
    await page.locator("#updateLeadForm_description").fill(
        updatedDescription
    );

    // click Update button
    await page.getByRole("button", {
        name: "Update",
        exact: true
    }).click();

    // verify the Company Name
    await expect(
        page.locator("#viewLead_companyName_sp")
    ).toContainText(updatedCompanyName);

    // verify the formatted Annual Revenue
    await expect(
        page.locator("#viewLead_annualRevenue_sp")
    ).toHaveText("$75,000.00");

    // verify the Department
    await expect(
        page.locator("#viewLead_departmentName_sp")
    ).toHaveText(updatedDepartment);

    // verify the Description
    await expect(
        page.locator("#viewLead_description_sp")
    ).toHaveText(updatedDescription);

    // get the page title
    const pageTitle = await page.title();

    // print the page title
    console.log("Edit Lead Title : " + pageTitle);

    // verify the page title
    expect(pageTitle).toContain("View Lead");

});


// Assignment 3 - Create Salesforce Account

test.describe("Salesforce Account", () => {

    // use the saved Salesforce login session
    test.use({
        storageState: "Data/login_salesforce.json"
    });

    // create a Salesforce Account test
    test("Create a new Salesforce Account", async ({ page }) => {

        // increase the test timeout for Salesforce
        test.setTimeout(90000);

        // navigate directly to the Salesforce Accounts page
        await page.goto(
            "https://orgfarm-5e9d2f5bc1-dev-ed.develop.lightning.force.com/lightning/o/Account/list"
        );

        // get the page title
        const pageTitle = await page.title();

        // print the page title
        console.log("Salesforce Title : " + pageTitle);

        // verify the current Salesforce title
        expect(pageTitle).toContain("Accounts");

        // verify the page title contains Salesforce
        expect(pageTitle).toContain("Salesforce");

        // get the current URL
        const currentUrl = page.url();

        // print the current URL
        console.log("Salesforce URL : " + currentUrl);

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

        // click New
        await newButton.click();

        // store the Account Name
        const accountName = "Testleaf Locator Account";

        // locate the Account Name textbox
        const accountNameTextbox = page.locator(
            'input[name="Name"]'
        );

        // verify the Account Name textbox is editable
        await expect(accountNameTextbox).toBeEditable();

        // enter the Account Name
        await accountNameTextbox.fill(accountName);

        // locate the Save button
        const saveButton = page.locator(
            '//button[@name="SaveEdit"]'
        );

        // verify the Save button is visible
        await expect(saveButton).toBeVisible();

        // click Save
        await saveButton.click();

        // locate the toast message
        const toastMessage = page.locator(
            '//span[contains(@class,"toastMessage")]'
        );

        // verify the toast message is visible
        await expect(toastMessage).toBeVisible({
            timeout: 20000
        });

        // verify the toast message contains Account
        await expect(toastMessage).toContainText(
            "Account"
        );

        // verify the toast message contains Account Name
        await expect(toastMessage).toContainText(
            accountName
        );

        // print the toast message
        console.log(
            "Toast Message : " +
            await toastMessage.innerText()
        );

    });

});