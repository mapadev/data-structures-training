// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// import R from 'ramda';

// function reverse(str) {
//     return R.reverse(str);
// }

// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// function reverse(str) {
//     let reversed = "";

//     // for (let i = 0; i < str.length; i++) {
//     //     reversed = str[i] + reversed;
//     // }

//     for (let char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }

function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse;
