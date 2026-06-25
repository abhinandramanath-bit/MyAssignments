// Glob variable
let genderType = "female";

// Function to print gender details
function printGender() {

    //  scope variable
    let color = "brown";

    // Check if gender starts with female
    if (genderType.startsWith("female")) {

        // var works in function scope
        var age = 30;

        // let works only inside block
        let color = "pink";

        // Print block scoped color
        console.log("Inside block color:", color);
    }

    // var can be used outside block
    console.log("Age:", age);

    // Function scoped color
    console.log("Outside block color:", color);
}

// Function call
printGender();

// Print global variable
console.log("Gender:", genderType);


// Change global variable
genderType = "male";

// Call again
printGender();