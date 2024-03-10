// 69. Sqrt(x)
// Easy
// Topics
// Companies
// Hint
// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// Constraints:

// 0 <= x <= 231 - 1

function mySqrt(x) {
  return Math.floor(Math.sqrt(x));
}

// console.log(mySqrt(8));

function mySqrtV2(x) {
  // the square root must be between
  // 1...x/2
  // so, we can use binary search to find square root

  let left = 1,
    right = x / 2;

  while (left <= right) {
    let mid = left + (right - left) / 2;
    console.log(mid);

    if (mid * mid == x) {
      return mid;
    } else if (mid * mid > x) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }

  return Math.round(right);
}

console.log(mySqrtV2(8));
