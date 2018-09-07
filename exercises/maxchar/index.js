// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const freqMap = str.split("").reduce((summary, char) => {
//         return {
//             ...summary,
//             [char]: summary[char] ? summary[char] + 1 : 1
//         };
//     }, {});

//     const top = Object.keys(freqMap).reduce(
//         (top, key) => {
//             if (freqMap[key] > top.count) {
//                 return { char: key, count: freqMap[key] };
//             } else {
//                 return top;
//             }
//         },
//         { char: "", count: 0 }
//     );

//     return top.char;
// }

function maxChar(str) {
    let maxLetter = "";
    let maxCount = 0;
    let charMap = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let key in charMap) {
        if (charMap[key] > maxCount) {
            maxCount = charMap[key];
            maxLetter = key;
        }
    }

    return maxLetter;
}

module.exports = maxChar;
