// import test and expect from playwright
import { expect, test } from "@playwright/test";


// create a test
test("Verify dynamic movie ticket booking flow in PVR Cinemas", async ({ page }) => {


    // navigate to PVR Cinemas website
    await page.goto("https://www.pvrcinemas.com/");


    // wait for the page to load
    await page.waitForTimeout(5000);


    // locate the cookie accept button
    const cookieButton = page.getByText("Accept All", { exact: true });


    // get the count of the cookie accept button
    const cookieButtonCount = await cookieButton.count();


    // check whether the cookie popup is displayed
    if (cookieButtonCount > 0) {


        // click the cookie accept button
        await cookieButton.click();


    }


    // click the city selection option
    await page.getByText("Select City", { exact: true }).click();


    // locate all the available cities
    const cityValues = page.locator(
        '//div[contains(@class,"city")]//*[self::p or self::span]'
    );


    // get the count of available cities
    const cityCount = await cityValues.count();


    // print the number of available cities
    console.log("Number of cities: " + cityCount);


    // select the first available city
    await cityValues.first().click();


    // click the Cinema option
    await page.getByText("Cinema", { exact: true }).click();


    // click the Select Cinema dropdown
    await page.getByText("Select Cinema", { exact: true }).click();


    // locate all the available cinemas
    const cinemaValues = page.locator(
        '//div[contains(@class,"cinema")]//*[self::li or self::p]'
    );


    // get the count of available cinemas
    const cinemaCount = await cinemaValues.count();


    // print the number of available cinemas
    console.log("Number of cinemas: " + cinemaCount);


    // select the first available cinema
    await cinemaValues.first().click();


    // locate all the available dates
    const dateValues = page.locator(
        '//div[contains(@class,"date")]//*[self::button or self::li]'
    );


    // get the count of available dates
    const dateCount = await dateValues.count();


    // print the number of available dates
    console.log("Number of dates: " + dateCount);


    // select the first available date
    await dateValues.first().click();


    // locate all the available movies
    const movieValues = page.locator(
        '//div[contains(@class,"movie")]//*[self::button or self::li or self::p]'
    );


    // get the count of available movies
    const movieCount = await movieValues.count();


    // print the number of available movies
    console.log("Number of movies: " + movieCount);


    // select the first available movie
    await movieValues.first().click();


    // locate all the available show timings
    const showTimeValues = page.locator(
        '//div[contains(@class,"time")]//*[self::button or self::li]'
    );


    // get the count of available show timings
    const showTimeCount = await showTimeValues.count();


    // print the number of available show timings
    console.log("Number of show timings: " + showTimeCount);


    // select the first available show time
    await showTimeValues.first().click();


    // click the Submit button
    await page.getByRole("button", { name: "Submit" }).click();


    // wait for the next page to load
    await page.waitForTimeout(5000);


    // locate the confirmation popup button
    const confirmationButton = page.getByText("Continue", { exact: true });


    // get the count of the confirmation button
    const confirmationButtonCount = await confirmationButton.count();


    // check whether the confirmation popup is displayed
    if (confirmationButtonCount > 0) {


        // click the Continue button
        await confirmationButton.click();


    }


    // locate all the available seats
    const availableSeats = page.locator(
        '//div[contains(@class,"seat") and not(contains(@class,"booked"))]'
    );


    // get the count of available seats
    const availableSeatCount = await availableSeats.count();


    // print the number of available seats
    console.log("Number of available seats: " + availableSeatCount);


    // select the first available seat
    await availableSeats.first().click();


    // locate the selected seat information
    const selectedSeatInformation = page.locator(
        '//*[contains(text(),"Selected Seat") or contains(text(),"Seat No")]'
    );


    // verify the selected seat information is visible
    await expect(selectedSeatInformation.first()).toBeVisible();


    // locate the total ticket amount
    const totalTicketAmount = page.locator(
        '//*[contains(text(),"Total") or contains(text(),"Payable Amount")]'
    );


    // verify the total ticket amount is visible
    await expect(totalTicketAmount.first()).toBeVisible();


    // get the total ticket amount
    const totalAmount = await totalTicketAmount.first().innerText();


    // print the total ticket amount
    console.log("Total ticket amount: " + totalAmount);


    // get the page title
    const pageTitle = await page.title();


    // print the page title
    console.log("Page title: " + pageTitle);


    // verify the page title is not empty
    expect(pageTitle).not.toBe("");


    // locate the Proceed button
    const proceedButton = page.getByRole("button", { name: /Proceed/i });


    // verify the Proceed button is visible
    await expect(proceedButton).toBeVisible();


    // click the Proceed button
    await proceedButton.click();


    // wait for demo purpose
    await page.waitForTimeout(3000);


});