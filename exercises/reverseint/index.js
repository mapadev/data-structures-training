// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     let isNegative = false;

//     if (n < 0) {
//         isNegative = true;
//         n = -n;
//     }

//     let rev = n
//         .toString()
//         .split("")
//         .reverse()
//         .join("");

//     return isNegative ? -Number(rev) : Number(rev);
// }

function reverseInt(n) {
    let signMultiplier = Math.sign(n);

    if (signMultiplier < 0) {
        n = -n;
    }

    let rev = n
        .toString()
        .split("")
        .reverse()
        .join("");

    return Number(rev) * signMultiplier;
}

module.exports = reverseInt;
