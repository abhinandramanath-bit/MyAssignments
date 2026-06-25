// Function to check number type
function checkNumber(num) {

    // Check if number is greater than 0
    if (num > 0) {
        return "Positive Number";
    }

    // Check if number is less than 0
    else if (num < 0) {
        return "Negative Number";
    }

    // If number is 0
    else {
        return "Zero";
    }
}


// Store a number
let number = -10;

// Call function and print result
console.log(checkNumber(number));