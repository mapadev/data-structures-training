// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'
//   pyramid(5)
//     '    #    '
//     '   ###   '
//     '  #####  '
//     ' ####### '
//     '#########'

// function pyramid(n) {
//     const width = 2 * n - 1;
//     let str;
//     for (let i = 1; i <= n; i++) {
//         let hashes = new Array(2 * i - 1).fill("#").join("");

//         let spaces;
//         if (width === 1) {
//             spaces = "";
//         } else {
//             spaces = new Array((width - hashes.length) / 2).fill(" ").join("");
//         }

//         str = spaces + hashes + spaces;
//         console.log(str);
//     }
// }

function pyramid(n, row = 0, hashesNo = 1, width = null) {
    if (n === row) {
        return;
    }

    pyramidWidth = width || 2 * n - 1;
    const spacesNo = (pyramidWidth - hashesNo) / 2;

    const hashes = new Array(hashesNo).fill("#").join("");
    const spaces = new Array(spacesNo).fill(" ").join("");

    console.log(spaces + hashes + spaces);

    pyramid(n, row + 1, hashesNo + 2, width);
}

module.exports = pyramid;
