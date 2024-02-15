// 28. Find the Index of the First Occurrence in a String
// Solved
// Easy
// Topics
// Companies
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// Raw implementation
function strStrV2(heyStack, needle) {
  const needleSize = needle.length;
  for (let i = 0; i < heyStack.length - needleSize + 1; i++) {
    if (heyStack.slice(i, i + needleSize) == needle) {
      return i;
    }
  }
  return -1;
}

console.log(strStrV2("addbutsad", "sad"));
console.log(strStrV2("leetcode", "leeto"));
