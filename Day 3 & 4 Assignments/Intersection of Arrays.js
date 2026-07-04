"use strict";
// create function named intersection
function intersection(arr1, arr2) {
    // create empty array to store common values
    let result = [];
    // loop through first array
    for (let i = 0; i < arr1.length; i++) {
        // store current value from first array
        let value = arr1[i];
        // check if value is present in second array
        if (arr2.includes(value)) {
            // check if value is not already added in result
            if (!result.includes(value)) {
                // add value to result array
                result.push(value);
            }
        }
    }
    // return result array
    return result;
}
// typical case
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
// no common elements
console.log(intersection([1, 2], [3, 4]));
// all elements common
console.log(intersection([1, 2, 3], [1, 2, 3]));
// duplicate values case
console.log(intersection([1, 2, 2, 3], [2, 3, 3, 4]));
