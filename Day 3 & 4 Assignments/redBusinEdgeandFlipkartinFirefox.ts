import { test, chromium, firefox } from "@playwright/test";

test("Launch RedBus in Edge and Flipkart in Firefox", async () => {
    // launch Edge browser using chromium channel
    const edgeBrowser = await chromium.launch({ channel: "msedge", headless: false });

    // create a new page in Edge browser
    const edgePage = await edgeBrowser.newPage();

    // open RedBus application
    await edgePage.goto("https://www.redbus.in");

    // get RedBus page title
    const redBusTitle = await edgePage.title();

    // print RedBus page title
    console.log("RedBus Title: " + redBusTitle);

    // get RedBus page URL
    const redBusUrl = edgePage.url();

    // print RedBus page URL
    console.log("RedBus URL: " + redBusUrl);

    // launch Firefox browser
    const firefoxBrowser = await firefox.launch({ headless: false });

    // create a new page in Firefox browser
    const firefoxPage = await firefoxBrowser.newPage();

    // open Flipkart application
    await firefoxPage.goto("https://www.flipkart.com");

    // get Flipkart page title
    const flipkartTitle = await firefoxPage.title();

    // print Flipkart page title
    console.log("Flipkart Title: " + flipkartTitle);

    // get Flipkart page URL
    const flipkartUrl = firefoxPage.url();

    // print Flipkart page URL
    console.log("Flipkart URL: " + flipkartUrl);

    // wait for 3 seconds
    await firefoxPage.waitForTimeout(3000);

    // close Edge browser
    await edgeBrowser.close();

    // close Firefox browser
    await firefoxBrowser.close();
});
