// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

// solution: NOT PERFORMANT
function unique(arr) {
  const result = [];
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
  });
  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

// console.log(unique(strings)); // Hare, Krishna, :-O

function uniqueV2(arr) {
  let hashmap = new Map();

  for (const item of arr) {
    if (!hashmap.has(item)) {
      hashmap.set(item, item);
    }
  }
  return Array.from(hashmap.values());
}

console.log(uniqueV2(strings)); // Hare, Krishna, :-O

function uniqueV3(arr) {
  return Array.from(new Set(arr));
}
