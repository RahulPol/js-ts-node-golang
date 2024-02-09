/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */

// Solution - 1: very simple
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  // 10:32

  // create a map with roman letter as key and integer as values
  // add IV, IX, XL, XC, CD, CM to the map
  // iterate over roman string, first check two characters in map if exist add the number to result and move 2 chars
  // if not exists then check only one character and move 1 char

  let map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  map.set("IV", 4);
  map.set("IX", 9);
  map.set("XL", 40);
  map.set("XC", 90);
  map.set("CD", 400);
  map.set("CM", 900);

  let i = 0,
    result = 0;
  while (i < s.length) {
    if (i + 1 < s.length && map.has(s[i] + s[i + 1])) {
      result = result + map.get(s[i] + s[i + 1]);
      i = i + 2;
    } else {
      result = result + map.get(s[i]);
      i = i + 1;
    }
  }

  return result;
};

// solution - correct
// hint  - Problem is simpler to solve by working the string from back to front and using a map.
// Run it through input
//  IV
//  XV

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0,
    number = 0,
    prev = 0;

  for (let j = s.length - 1; j >= 0; j--) {
    switch (s[j]) {
      case "I":
        number = 1;
        break;
      case "V":
        number = 5;
        break;
      case "X":
        number = 10;
        break;
      case "L":
        number = 50;
        break;
      case "C":
        number = 100;
        break;
      case "D":
        number = 500;
        break;
      case "M":
        number = 1000;
        break;
    }
    if (number < prev) {
      result = result - number;
    } else {
      result = result + number;
    }
    prev = number;
  }

  return result;
};
