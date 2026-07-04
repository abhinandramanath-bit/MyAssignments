// create function named userProfile
function userProfile(name) {

    // print hello message with name
    console.log("Hello, " + name + "!");
}

// call userProfile function
userProfile("Abhinandan");


// create arrow function named double
const double = (num) => {

    // return double value
    return num * 2;
};

// print double value
console.log(double(5));


// use anonymous function with setTimeout
setTimeout(function () {

    // print delayed message
    console.log("This message is delayed by 2 seconds");

}, 2000); // wait for 2 seconds


// create function named getUserData
function getUserData(callback) {

    // use setTimeout to simulate delay
    setTimeout(function () {

        // call callback function
        callback();

    }, 3000); // wait for 3 seconds
}

// call getUserData function
getUserData(function () {

    // print callback message
    console.log("Call Back Function");
});