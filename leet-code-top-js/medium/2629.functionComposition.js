// 2629. Function Composition

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

// Constraints:

// -1000 <= x <= 1000
// 0 <= functions.length <= 1000
// all functions accept and return a single integer

// SOLUTION: Simple
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  if (functions.length == 0) {
    return (x) => x;
  }
  // let result;
  functions = functions.reverse();
  return function (x) {
    let result = functions[0](x);
    // Note: starting with 1
    for (let i = 1; i < functions.length; i++) {
      let fn = functions[i];
      result = fn(result);
    }
    return result;
  };
};

// const composedResult = compose([(x) => x + 1, (x) => x * x, (x) => x * 2]);

// console.log(composedResult(4));

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

// SOLUTION: with reduce
// NOTE, Here the reduce is returned as closure function and then it calls another function

var composeV2 = function (functions) {
  if (functions.length == 0) {
    return (x) => x;
  }

  functions.reverse();
  // If `initial` value is not provided then it uses first element of array as initial value and starts the iteration from the 2nd element.
  return functions.reduce((prev, curr) => {
    return (x) => curr(prev(x));
  });
};

const fnV2 = composeV2([(x) => x + 1, (x) => x * x, (x) => x * 2]);
console.log(fnV2(4)); // 65
