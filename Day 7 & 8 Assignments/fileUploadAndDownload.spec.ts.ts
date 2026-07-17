/// <reference types="node" />

// import expect and test from playwright
import { expect, test } from "@playwright/test";
// import path library from node
import path from "path";
// import file system library from node
import fs from "fs";

test("Upload Files without clicking Upload button", async ({ page }) => {
    // load the file upload application
    await page.goto("https://the-internet.herokuapp.com/upload");
    // create the document file path
    const documentFilePath = path.join(__dirname, "../../Data/file.json");
    // locate the normal file input
    const normalFileUpload = page.locator("#file-upload");
    // upload the document without clicking the Upload button
    await normalFileUpload.setInputFiles(documentFilePath);
    // verify the document name is available in the file input
    await expect(normalFileUpload).toHaveValue(/file\.json/);

    // create the image file path
    const imageFilePath = path.join(__dirname, "../../Data/AbsolutePath.png");
    // locate the hidden file input inside the red square area
    const redBoxFileUpload = page.locator(".dz-hidden-input");
    // upload the image inside the red square area
    await redBoxFileUpload.setInputFiles(imageFilePath);
    // locate the uploaded image preview
    const uploadedImagePreview = page.locator(".dz-preview");
    // verify the image has been uploaded
    await expect(uploadedImagePreview).toBeVisible();
    // wait for demo purpose
    await page.waitForTimeout(3000);
});

test("Download file.json and verify the downloaded path", async ({ page }) => {
    // load the file download application
    await page.goto("https://the-internet.herokuapp.com/download");
    // start waiting for the download event
    const downloadPromise = page.waitForEvent("download");
    // click file.json from the list
    await page.getByRole("link", { name: "file.json", exact: true }).click();
    // capture the downloaded file
    const download = await downloadPromise;
    // create the required download folder path
    const downloadFolderPath = path.join(__dirname, "../../Downloads");
    // create the Downloads folder when it is not available
    if (!fs.existsSync(downloadFolderPath)) {
        // create the Downloads folder
        fs.mkdirSync(downloadFolderPath);
    }
    // create the required downloaded file path
    const downloadedFilePath = path.join(downloadFolderPath, download.suggestedFilename());
    // save the downloaded file in the required path
    await download.saveAs(downloadedFilePath);
    // verify the downloaded file name
    expect(download.suggestedFilename()).toBe("file.json");
    // verify the file is available in the required path
    expect(fs.existsSync(downloadedFilePath)).toBe(true);
    // print the downloaded file path
    console.log("Downloaded File Path : " + downloadedFilePath);
});
