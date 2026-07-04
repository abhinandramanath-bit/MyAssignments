"use strict";
// create function named fibonacci
function fibonacci(n) {
    // check if n is 0
    if (n === 0) {
        // return 0 for first fibonacci number
        return 0;
    }
    // check if n is 1
    if (n === 1) {
        // return 1 for second fibonacci number
        return 1;
    }
    // store first fibonacci number
    let first = 0;
    // store second fibonacci number
    let second = 1;
    // create variable to store next number
    let next = 0;
    // loop from 2 till n
    for (let i = 2; i <= n; i++) {
        // add first and second number
        next = first + second;
        // move second value to first
        first = second;
        // move next value to second
        second = next;
    }
    // return final fibonacci number
    return next;
}
// print fibonacci of 0
console.log(fibonacci(0));
// print fibonacci of 1
console.log(fibonacci(1));
// print fibonacci of 5
console.log(fibonacci(5));
// print fibonacci of 7
console.log(fibonacci(7));
