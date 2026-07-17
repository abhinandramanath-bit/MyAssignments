/// <reference types="node" />

// import expect and test from playwright
import { expect, test } from "@playwright/test";

// import path library
import path from "path";

// use Salesforce storage state
test.use({
    storageState: "Data/login_salesforce.json"
});

// create a test
test("Create Salesforce Account and Upload File", async ({ page }) => {

    // increase timeout
    test.setTimeout(120000);

    // navigate to Accounts page
    await page.goto(
        "https://orgfarm-5e9d2f5bc1-dev-ed.develop.lightning.force.com/lightning/o/Account/list"
    );

    // locate New button
    const newButton = page.getByRole("button", {
        name: "New",
        exact: true
    });

    // verify New button is visible
    await expect(newButton).toBeVisible({
        timeout: 30000
    });

    // click New
    await newButton.click();

    // store Account Name
    const accountName = "Testleaf File Upload Account";

    // locate Account Name textbox
    const accountNameTextbox = page.locator(
        'input[name="Name"]'
    );

    // verify textbox is editable
    await expect(accountNameTextbox).toBeEditable();

    // enter Account Name
    await accountNameTextbox.fill(accountName);

    // locate Save button
    const saveButton = page.locator(
        "//button[@name='SaveEdit']"
    );

    // verify Save button is visible
    await expect(saveButton).toBeVisible();

    // click Save
    await saveButton.click();

    // locate toast message
    const toastMessage = page.locator(
        "//span[contains(@class,'toastMessage')]"
    );

    // verify toast is visible
    await expect(toastMessage).toBeVisible({
        timeout: 20000
    });

    // verify Account creation
    await expect(toastMessage).toContainText(accountName);

    // print Account creation message
    console.log(
        "Account Created : " +
        await toastMessage.innerText()
    );

    // create file path
    const filePath = path.join(
        __dirname,
        "../Data/AbsolutePath.png"
    );

    // print file path
    console.log("File Path : " + filePath);

    // wait for File Chooser
    const fileChooserPromise =
        page.waitForEvent("filechooser");

    // click Upload Files button
    await page.getByText(
        "Upload Files",
        { exact: true }
    ).click();

    // capture File Chooser
    const fileChooser =
        await fileChooserPromise;

    // upload file
    await fileChooser.setFiles(filePath);

    // locate Done button
    const doneButton = page.getByRole(
        "button",
        {
            name: "Done",
            exact: true
        }
    );

    // verify Done button
    await expect(doneButton).toBeVisible({
        timeout: 30000
    });

    // click Done
    await doneButton.click();

    // locate uploaded file
    const uploadedFile = page.getByText(
        "AbsolutePath",
        { exact: false }
    );

    // verify uploaded file is visible
    await expect(uploadedFile).toBeVisible({
        timeout: 30000
    });

    // print uploaded file name
    console.log(
        "Uploaded File : " +
        await uploadedFile.first().innerText()
    );

    // wait for demo
    await page.waitForTimeout(3000);

});