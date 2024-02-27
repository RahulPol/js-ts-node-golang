// Write a function that accepts another function fn and converts the callback-based function into a promise-based function.

// The promisify function takes in a function fn that accepts a callback as its first argument and also any additional arguments. It returns a new function that returns a promise instead. The returned promise should resolve with the result of the original function when the callback is called with a successful response, and reject with the error when the callback is called with an error. The returned promise-based function should accept the additional arguments as inputs.

// The following is an example of a function that could be passed into promisify.

// function sum(callback, a, b) {
//   if (a < 0 || b < 0) {
//     const err = Error('a and b must be positive');
//     callback(undefined, err);
//   } else {
//     callback(a + b);
//   }
// }

// This is the equivalent code based on promises:

// async function sum(a, b) {
//   if (a < 0 || b < 0) {
//     throw Error('a and b must be positive');
//   } else {
//     return a + b;
//   }
// }

// Example 1:

// Input:
// fn = (callback, a, b, c) => {
//   return callback(a * b * c);
// }
// args = [1, 2, 3]
// Output: {"resolved": 6}
// Explanation:
// const asyncFunc = promisify(fn);
// asyncFunc(1, 2, 3).then(console.log); // 6

// fn is called with a callback as the first argument and args as the rest. The promise based version of fn resolves a value of 6 when called with (1, 2, 3).
// Example 2:

// Input:
// fn = (callback, a, b, c) => {
//   callback(a * b * c, "Promise Rejected");
// }
// args = [4, 5, 6]
// Output: {"rejected": "Promise Rejected"}
// Explanation:
// const asyncFunc = promisify(fn);
// asyncFunc(4, 5, 6).catch(console.log); // "Promise Rejected"

// fn is called with a callback as the first argument and args as the rest. As the second argument, the callback accepts an error message, so when fn is called, the promise is rejected with a error message provided in the callback. Note that it did not matter what was passed as the first argument into the callback.

// Constraints:

// 1 <= args.length <= 100
// 0 <= args[i] <= 104

// THIS IS A TRICKY QUESTION

// You need to understand that we can not get the first parameter of the function passed as argument to another function.
// eg.
// function abc(fn) {}
// in here you can not get what are the parameters of fn are, but as discussed in the problem the callback is always a function that accetps
// two arguments data & err, so you need to write the same definition

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn((data, err) => (data ? resolve(data) : reject(err)), ...args);
      resolve(1);
    });
  };
}

const fn = (callback, a, b, c) => {
    return callback(a * b * c);
  },
  args = [1, 2, 3];

const asyncFunc = promisify(fn);
asyncFunc(1, 2, 3).then(console.log);
