// Write code that enhances all strings such that you can call the string.replicate(x) method on any string and it will return repeated string x times.

// Try to implement it without using the built-in method string.repeat.

// Example 1:

// Input: str = "hello", times = 2
// Output: "hellohello"
// Explanation: "hello" is repeated 2 times
// Example 2:

// Input: str = "code", times = 3
// Output: "codecodecode"
// Explanation: "code" is repeated 3 times
// Example 3:

// Input: str = "js", times = 1
// Output: "js"
// Explanation: "js" is repeated 1 time

String.prototype.replicate = function (times) {
  return new Array(times).fill(this).join("");
};

const s = "code";
console.log(s.replicate(3));
