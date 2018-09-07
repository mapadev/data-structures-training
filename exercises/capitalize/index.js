// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     return str
//         .split(" ")
//         .map(word => {
//             const wordArr = word.split("");
//             wordArr[0] = wordArr[0].toUpperCase();
//             return wordArr.join("");
//         })
//         .join(" ");
// }

// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(" ")) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return words.join(" ");
// }

function capitalize(str) {
    let capitalizedString = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            capitalizedString += str[i].toUpperCase();
        } else {
            capitalizedString += str[i];
        }
    }

    return capitalizedString;
}

module.exports = capitalize;
