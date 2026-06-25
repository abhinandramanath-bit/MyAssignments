// Global constant variable
const browserName = "Chrome";

// Function to check browser name
function getBrowserName() {

    // Check if browser is Chrome
    if (browserName === "Chrome") {

        // Local variable using var
        var browserName1 = "Edge";
    }

    // var can be accessed outside block
    console.log("Browser using var:", browserName1);
}

// Function call
getBrowserName();

//Same with let

// Global constant variable
const browser = "Chrome";

// Function to check browser
function getBrowser() {

    // Check browser name
    if (browser === "Chrome") {

        // Block variable using let
        let newBrowser = "Firefox";

        // let works only inside block
        console.log("Browser using let:", newBrowser);
    }
}

// Function call
getBrowser();