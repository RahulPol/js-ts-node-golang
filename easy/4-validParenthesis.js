/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // this is a question on stack
  // basically if opening bracket then push into stack
  // if closing then pop and
  // check it matches with corresponding bracket
  // if yes, then continue
  // else, return false

  // at the end of loop check if stack is empty
  // if yes, return true
  // else, return false

  const openingParenthesis = ["(", "{", "["];

  const map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");

  // even though array is const modification is allowed in js cause we are not assigning new array
  // to stack. To make immutable array in js use Object.freeze
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (openingParenthesis.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const lastParenthesis = stack.pop(); // poping from blank array yeilds undefined
      if (map.get(lastParenthesis) == s[i]) {
        continue;
      } else {
        return false;
      }
    }
  }

  // its important to check stack is empty
  if (stack.length == 0) {
    return true;
  }

  return false;
};

// another answer without map

var isValid = function (s) {
  let stack = []; // create an empty stack to store opening brackets
  for (let c of s) {
    // loop through each character in the string
    if (c === "(" || c === "{" || c === "[") {
      // if the character is an opening bracket
      stack.push(c); // push it onto the stack
    } else {
      // if the character is a closing bracket
      if (
        !stack.length || // if the stack is empty or
        (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
        (c === "}" && stack[stack.length - 1] !== "{") ||
        (c === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false; // the string is not valid, so return false
      }
      stack.pop(); // otherwise, pop the opening bracket from the stack
    }
  }
  return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
  // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};

// best answer

// class Solution {
//     public boolean isValid(String s) {
//         Stack<Character> stack = new Stack<Character>(); // create an empty stack
//         for (char c : s.toCharArray()) { // loop through each character in the string
//             if (c == '(') // if the character is an opening parenthesis
//                 stack.push(')'); // push the corresponding closing parenthesis onto the stack
//             else if (c == '{') // if the character is an opening brace
//                 stack.push('}'); // push the corresponding closing brace onto the stack
//             else if (c == '[') // if the character is an opening bracket
//                 stack.push(']'); // push the corresponding closing bracket onto the stack
//             else if (stack.isEmpty() || stack.pop() != c) // if the character is a closing bracket
//                 // if the stack is empty (i.e., there is no matching opening bracket) or the top of the stack
//                 // does not match the closing bracket, the string is not valid, so return false
//                 return false;
//         }
//         // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
//         // so the string is valid, otherwise, there are unmatched opening brackets, so return false
//         return stack.isEmpty();
//     }
// }
