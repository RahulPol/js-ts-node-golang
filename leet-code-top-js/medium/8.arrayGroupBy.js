// 2631. Group By
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

// Example 1:

// Input:
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ],
// fn = function (item) {
//   return item.id;
// }
// Output:
// {
//   "1": [{"id": "1"}, {"id": "1"}],
//   "2": [{"id": "2"}]
// }
// Explanation:
// Output is from array.groupBy(fn).
// The selector function gets the "id" out of each item in the array.
// There are two objects with an "id" of 1. Both of those objects are put in the first array.
// There is one object with an "id" of 2. That object is put in the second array.
// Example 2:

// Input:
// array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9]
// ]
// fn = function (list) {
//   return String(list[0]);
// }
// Output:
// {
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }
// Explanation:
// The array can be of any type. In this case, the selector function defines the key as being the first element in the array.
// All the arrays have 1 as their first element so they are grouped together.
// {
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }
// Example 3:

// Input:
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// fn = function (n) {
//   return String(n > 5);
// }
// Output:
// {
//   "true": [6, 7, 8, 9, 10],
//   "false": [1, 2, 3, 4, 5]
// }
// Explanation:
// The selector function splits the array by whether each number is greater than 5.

// Constraints:

// 0 <= array.length <= 105
// fn returns a string

// SOLUTION: Simple
// This solution is not getting accepted as

Array.prototype.groupBy = function (fn) {
  const map = new Map();

  for (const item of this) {
    if (map.has(fn(item))) {
      const contents = map.get(fn(item));
      map.set(fn(item), [...contents, item]);
    } else {
      map.set(fn(item), [item]);
    }
  }

  return Object.fromEntries(map);
};

// console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}

// A bit better solution is to use object instead of map as it lightweight and the current problem can be solved with it

Array.prototype.groupByV2 = function (fn) {
  const result = {};

  for (const item of this) {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
      result[key].push([item]);
    } else {
      result[key] = [...result[key], item];
    }
  }

  return result;
};

console.log([1, 2, 3].groupByV2(String)); // {"1":[1],"2":[2],"3":[3]}

// SOLUTION: with reduce as  map and object solution will result in time limit exceeded in case Array is too big

Array.prototype.groupByV3 = function (fn) {
  return this.reduce((result, item) => {
    const key = fn(item);
    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
    return result;
  }, {});
};

// console.log([1, 2, 3].groupByV3(String)); // {"1":[1],"2":[2],"3":[3]}
