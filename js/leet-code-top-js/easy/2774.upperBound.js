// Write code that enhances all arrays such that you can call the upperBound() method on any array and it will return the last index of a given target number. nums is a sorted ascending array of numbers that may contain duplicates. If the target number is not found in the array, return -1.

// Example 1:

// Input: nums = [3,4,5], target = 5
// Output: 2
// Explanation: Last index of target value is 2
// Example 2:

// Input: nums = [1,4,5], target = 2
// Output: -1
// Explanation: Because there is no digit 2 in the array, return -1.

// Solution: Simple
Array.prototype.upperBound = function (target) {
  return this.lastIndexOf(target);
};

// SOLUTION: Binary search
Array.prototype.upperBoundV2 = function (target) {
  let left = 0,
    right = this.length,
    mid,
    result;

  while (left < right) {
    // VERY VERY IMPORTANT IN JS PLEASE USE MATH.FLOOR ELSE IT WILL COMPUTE DECIMAL VALUES AND YOU WILL NOT GET RIGHT ANSWER
    mid = left + Math.floor((right - left) / 2);

    if (this[mid] == target) {
      break;
    } else if (this[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  while (this[mid] === target && mid < this.length) {
    result = mid;
    mid += 1;
  }

  return result ?? -1;
};

const nums = [3, 4, 4, 4, 5, 5],
  target = 44;
console.log(nums.upperBoundV2(target));
