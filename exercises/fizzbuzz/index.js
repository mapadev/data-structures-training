// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n, fizzNum = 3, buzzNum = 5) {
    for (let i = 1; i <= n; i++) {
        if (isMultipleOf(fizzNum, i) && isMultipleOf(buzzNum, i)) {
            console.log("fizzbuzz");
        } else if (isMultipleOf(fizzNum, i)) {
            console.log("fizz");
        } else if (isMultipleOf(buzzNum, i)) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

function isMultipleOf(x, number) {
    return number % x === 0;
}

module.exports = fizzBuzz;
