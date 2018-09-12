// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const fibSequence = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//     }

//     return fibSequence[n];
// }

// function fib(n, fibSequence = [0, 1]) {
//     if (n === 0 || n === 1) {
//         return fibSequence[n];
//     }

//     if (fibSequence.length === n + 1) {
//         return;
//     }

//     const len = fibSequence.length;
//     const newItem = fibSequence[len - 2] + fibSequence[len - 1];

//     fibSequence.push(newItem);

//     fib(n, fibSequence);

//     return fibSequence[n];
// }

// --- start ---------------------------------

// function memoize(fn) {
//     const cache = {};

//     return function(...args) {
//         if (cache[args]) {
//             return cache[args];
//         }

//         // const result = fn.apply(this, args);
//         const result = fn(...args);

//         cache[args] = result;

//         return result;
//     };
// }

// function fib(n) {
//     if (n < 2) {
//         return n;
//     }

//     return fib(n - 2) + fib(n - 1);
// }

// fib = memoize(fib);

// --- end ---------------------------------

function fib(n, cache = {}) {
    if (n < 2) {
        return n;
    }

    if (cache[n]) {
        return cache[n];
    }

    const result = fib(n - 2, cache) + fib(n - 1, cache);

    cache[n] = result;

    return result;
}

module.exports = fib;
