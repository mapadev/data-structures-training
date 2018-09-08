// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         step =
//             new Array(i).fill("#").join("") +
//             new Array(n - i).fill(" ").join("");
//         console.log(step);
//     }
// }

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = "";

//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 stair += "#";
//             } else {
//                 stair += " ";
//             }
//         }

//         console.log(stair);
//     }
// }

// function steps(n, row = 0, string = "") {
//     if (n === row) {
//         return;
//     }

//     if (string.length < n) {
//         if (string.length <= row) {
//             string += "#";
//         } else {
//         string += " ";
//         }
//         return steps(n, row, string);
//     }

//     console.log(string);

//     steps(n, row + 1);
// }

function steps(n, row = 0, string = "") {
    if (n === row) {
        return;
    }

    if (n === string.length) {
        console.log(string);
        return steps(n, row + 1);
    }

    if (string.length <= row) {
        string += "#";
    } else {
        string += " ";
    }
    return steps(n, row, string);
}

module.exports = steps;
