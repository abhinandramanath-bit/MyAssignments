// Function for browser launch
function launchBrowser(browserName) {

    // Check if browser is chrome
    if (browserName === "chrome") {
        console.log("Chrome Browser Launched");
    }

    // For other browsers
    else {
        console.log("Other Browser Launched");
    }
}


// Function for test type
function runTests(testType) {

    // Check test type using switch
    switch (testType) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
    }
}


// Calling functions
launchBrowser("chrome");
runTests("sanity");