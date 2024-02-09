/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */

// Solution

// let commonPrefix = "";

// const recursiveCheck = (char, strs) => {
//   for (let i = 0; i < strs.length; i++) {
//     const str = strs[i];
//     if (!str.startsWith(char) || str == "") {
//       return;
//     }
//   }
//   commonPrefix += char;

//   modifiedStrs = strs.map((str) => str.substring(1));
//   modifiedChar = modifiedStrs[0].charAt(0);
//   recursiveCheck(modifiedChar, modifiedStrs);
// };

// var longestCommonPrefix = function (strs) {
//   // call a recursive function which will check first character of the a string
//   // is part of all strings, if yes then add it to result and remove it from all strings
//   // if not then break the recurrsion and provide result
//   commonPrefix = "";

//   recursiveCheck(strs[0].charAt(0), strs);
//   return commonPrefix;
// };

// best answer
var longestCommonPrefix = function (strs) {
  // checkout output of sort and you will understand answer
  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];
  let commonPrefix = "";
  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first.charAt(i) != last.charAt(i)) {
      return commonPrefix;
    }
    commonPrefix += first.charAt(i);
  }

  return commonPrefix;
};

// This code implements the longestCommonPrefix function that takes a list of strings v as input and returns the longest common prefix of all the strings. Here is an explanation of how the code works:

// Initialize an empty string ans to store the common prefix.
// Sort the input list v lexicographically. This step is necessary because the common prefix should be common to all the strings, so we need to find the common prefix of the first and last string in the sorted list.
// Iterate through the characters of the first and last string in the sorted list, stopping at the length of the shorter string.
// If the current character of the first string is not equal to the current character of the last string, return the common prefix found so far.
// Otherwise, append the current character to the ans string.
// Return the ans string containing the longest common prefix.
// Note that the code assumes that the input list v is non-empty, and that all the strings in v have at least one character. If either of these assumptions is not true, the code may fail.
