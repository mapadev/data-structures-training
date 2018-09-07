// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     return clean(stringA) === clean(stringB);
// }

// function clean(str) {
//     return str
//         .toLowerCase()
//         .split("")
//         .filter(char => {
//             return /[a-z]/.test(char);
//         })
//         .sort()
//         .join("");
// }

function anagrams(stringA, stringB) {
    const cleanA = cleanStr(stringA);
    const cleanB = cleanStr(stringB);

    const aCharMap = buildCharMap(cleanA.split(""));
    const bCharMap = buildCharMap(cleanB.split(""));

    if (cleanA.length !== cleanB.length) {
        return false;
    }

    for (let key in aCharMap) {
        if (aCharMap[key] !== bCharMap[key]) {
            return false;
        }
    }

    return true;
}

function cleanStr(str) {
    return str.toLowerCase().replace(/\W/g, "");
}

function buildCharMap(arr) {
    const charMap = {};

    arr.forEach(char => {
        charMap[char] = charMap[char] + 1 || 1;
    });

    return charMap;
}

module.exports = anagrams;
