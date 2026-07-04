// declare global variable browser
let browser = "Chrome";

// create function named checkBrowserVersion
function checkBrowserVersion(callback) {

    // use setTimeout to create delay
    setTimeout(function () {

        // call callback function and pass browser value
        callback(browser);

    }, 2000); // wait for 2 seconds
}

// create callback function
function printBrowserVersion(browserName) {

    // print browser version message
    console.log("Browser version using callback: " + browserName);
}

// call checkBrowserVersion function
checkBrowserVersion(printBrowserVersion);