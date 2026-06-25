// Function to reverse a string
function reverseString(input) {
    
    // Convert string into array of characters
    let chars = input.split("");

    // Empty variable to store reversed string
    let reversed = "";

    // Loop from last character to first
    for (let i = chars.length - 1; i >= 0; i--) {
        
        // Add each character to reversed string
        reversed = reversed + chars[i];
    }

    // Print reversed string
    console.log("Reversed String:", reversed);

    // Send reversed value back
    return reversed;
}


// Function to check palindrome
function checkPalindrome(word) {

    // Call reverse function
    let reversedWord = reverseString(word);

    // Compare original and reversed string
    if (word === reversedWord) {
        console.log("It is a Palindrome");
    } 
    else {
        console.log("It is Not a Palindrome");
    }
}


// Calling function
checkPalindrome("madam");