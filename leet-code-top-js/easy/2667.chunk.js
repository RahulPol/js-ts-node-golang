// 2667. Chunk Array
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

// Example 1:

// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"

// The function returned by createHelloWorld should always return "Hello World".
// Example 2:

// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"

// Any arguments could be passed to the function but it should still always return "Hello World".

// Constraints:

// 0 <= args.length <= 10

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const result = [];
  for (i = 0; i < arr.length; i = i + size) {
    const start = i;
    const end = i + size < arr.length ? i + size : arr.length;
    result.push(arr.slice(start, end));
  }

  return result;
};
