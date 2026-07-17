// import expect and test from playwright
import { expect, test } from "@playwright/test";

test("Interact with Frames in LeafGround", async ({ page }) => {
    // load the LeafGround frame page
    await page.goto("https://leafground.com/frame.xhtml");

    // locate the first frame
    const firstFrame = page.frameLocator("iframe").first();
    // locate the Click Me button inside the first frame
    const firstFrameButton = firstFrame.getByRole("button");
    // verify the button is visible
    await expect(firstFrameButton).toBeVisible();
    // click the button inside the first frame
    await firstFrameButton.click();
    // verify the button text changed after clicking
    await expect(firstFrameButton).toContainText("Hurray");

    // get all frames available on the page
    const allFrames = page.frames();
    // get the child frame count by excluding the main page
    const frameCount = allFrames.length - 1;
    // print the total frame count
    console.log("Total Frame Count : " + frameCount);

    // locate the outer frame which contains the nested frame
    const outerFrame = page.frameLocator("iframe").nth(2);
    // locate the inner frame
    const innerFrame = outerFrame.frameLocator("iframe");
    // locate the Click Me button inside the nested frame
    const nestedFrameButton = innerFrame.getByRole("button");
    // verify the nested frame button is visible
    await expect(nestedFrameButton).toBeVisible();
    // click the button inside the nested frame
    await nestedFrameButton.click();
    // verify the nested frame button text changed
    await expect(nestedFrameButton).toContainText("Hurray");
    // wait for demo purpose
    await page.waitForTimeout(3000);
});
