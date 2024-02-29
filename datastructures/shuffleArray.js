// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// solution :: very very bad

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function shuffle(arr) {
//   let newOrder = [];

//   while (arr.length != newOrder.length) {
//     const newRandom = getRandomNumber(0, arr.length - 1);
//     console.log(newRandom);
//     if (!newOrder.includes(newRandom)) {
//       newOrder.push(newRandom);
//     }
//   }

//   let counter = 0;
//   for (const item of newOrder) {
//     arr[counter] = arr[item];
//   }
//   return arr;
// }

// console.log(shuffle([1, 2, 3]));

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3];
shuffle(arr);
// console.log(arr);

// Another solution
function shuffleV2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr2 = [1, 2, 3];
shuffleV2(arr2);
console.log(arr2);
