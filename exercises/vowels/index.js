// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     const vowels = str.split("").filter(char => {
//         return /[aeiou]/i.test(char);
//     });

//     return vowels.length;
// }

function vowels(str) {
    const validator = ["a", "e", "i", "o", "u"];
    let result = "";

    for (let char of str.toLowerCase()) {
        if (validator.includes(char)) {
            result += char;
        }
    }

    return result.length;
}

module.exports = vowels;
