
// //Example 1 – Last word length

// // Function to find last word length
// function lastWordLength(text) {

//     // Split sentence into words
//     let words = text.split(" ");

//     // Get last word
//     let lastWord = words[words.length - 1];

//     // Print length
//     console.log(lastWord.length);
// }


// // Call function
// lastWordLength("Hello World");

// /******************************************/
// //Example 2 – Trim and last word

// Function for trimmed string
function getLastWordLength(text) {

    // Remove extra spaces
    let cleanText = text.trim();

    // Split words
    let words = cleanText.split(" ");

    // Find last word
    let lastWord = words[words.length - 1];

    // Print length
    console.log(lastWord.length);
}


// Call function
getLastWordLength(" fly me to the moon ");

/********************************/
// //Example 3 – Anagram check
// // Function to check anagram
// function isAnagram(word1, word2) {

//     // Convert to lowercase and sort letters
//     let first = word1.toLowerCase().split("").sort().join("");

//     // Convert second word and sort letters
//     let second = word2.toLowerCase().split("").sort().join("");

//     // Compare both words
//     if (first === second) {
//         console.log(true);
//     } 
//     else {
//         console.log(false);
//     }
// }


// // Call function
// isAnagram("listen", "silent");