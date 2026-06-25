// Function to print odd numbers
function printOddNumbers() {

    // Loop from 1 to 25
    for (let i = 1; i <= 25; i++) {

        // Check odd number using modulo
        if (i % 2 !== 0) {

            // Print odd number
            console.log(i);
        }
    }
}


// Call function
printOddNumbers();