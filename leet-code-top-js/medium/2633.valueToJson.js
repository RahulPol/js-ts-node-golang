// Given a value, return a valid JSON string of that value. The value can be a string, number, array, object, boolean, or null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().

// Please solve it without using the built-in JSON.stringify method.

// Example 1:

// Input: object = {"y":1,"x":2}
// Output: {"y":1,"x":2}
// Explanation:
// Return the JSON representation.
// Note that the order of keys should be the same as the order returned by Object.keys().
// Example 2:

// Input: object = {"a":"str","b":-12,"c":true,"d":null}
// Output: {"a":"str","b":-12,"c":true,"d":null}
// Explanation:
// The primitives of JSON are strings, numbers, booleans, and null.
// Example 3:

// Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
// Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
// Explanation:
// Objects and arrays can include other objects and arrays.
// Example 4:

// Input: object = true
// Output: true
// Explanation:
// Primitive types are valid inputs.

// Constraints:

// value is a valid JSON value
// 1 <= JSON.stringify(object).length <= 105
// maxNestingLevel <= 1000
// all strings contain only alphanumeric characters

// SOLUTION: Simple

// function convertValueToJSON() {
//   let result = "";
//   const converter = function (value) {
//     if (typeof value === "object" && value !== null && !Array.isArray(value)) {
//       //  object
//       result += "{";
//       for (const key in value) {
//         if (typeof value[key] === "object") {
//           converter(value[key]);
//         }
//         result += `${key}: ${value[key]},`;
//       }
//       result = result.slice(0, -1);
//       result += "}";
//     } else if (Array.isArray(value)) {
//       // array
//       console.log(`inside array ${value}`);
//       result += "[";
//       result += value.toString();
//       result += "]";
//     } else {
//       if (value == null) {
//         result += "null";
//       } else {
//         result += value.toString();
//       }
//     }
//     return result;
//   };

//   return converter;
// }

// const convert = convertValueToJSON();

// console.log(convert({ a: 10, b: 20, c: [1, 2, 3] }));

// SOLUTION: best

function valueToJson(value) {
  if (value === null) {
    return "null";
  }
  if (typeof value === "string") {
    return `"${object}"`;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return value.toString();
  }
  if (Array.isArray(value)) {
    return `[${value.map(valueToJson).join(",")}]`;
  }
  if (typeof value === "object") {
    return `{${Object.entries(value)
      .map(([key, value]) => `${valueToJson(key)}:${valueToJson(value)}`)
      .join(",")}}`;
  }
  return "";
}
