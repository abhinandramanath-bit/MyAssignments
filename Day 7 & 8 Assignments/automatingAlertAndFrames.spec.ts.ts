// import expect and test from playwright
import { expect, test } from "@playwright/test";

test("Automate Alert and Frame Interactions", async ({ page }) => {
    // load the W3Schools application
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    // listen to the alert displayed on the page
    page.on("dialog", async (allAlert) => {
        // print the alert message
        console.log("Alert Message : " + allAlert.message());
        // print the alert type
        console.log("Alert Type : " + allAlert.type());
        // verify that the alert type is confirm
        expect(allAlert.type()).toBe("confirm");
        // click the OK button in the alert
        await allAlert.accept();
    });

    // locate the result frame
    const resultFrame = page.frameLocator("#iframeResult");
    // click the Try it button inside the frame
    await resultFrame.getByRole("button", { name: "Try it", exact: true }).click();
    // locate the result text inside the frame
    const resultText = resultFrame.locator("#demo");
    // verify that the result text is visible
    await expect(resultText).toBeVisible();
    // verify the result text after accepting the alert
    await expect(resultText).toHaveText("You pressed OK!");
    // print the result text
    console.log("Result Text : " + await resultText.innerText());
    // wait for demo purpose
    await page.waitForTimeout(3000);
});
