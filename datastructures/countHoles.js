// Given an integer num, the task is to count the number of holes in that number. The holes in each digit are given below:

// Digit	Number of Holes
// 0	1
// 1	0
// 2	0
// 3	0
// 4	1
// 5	0
// 6	1
// 7	0
// 8	2
// 9	1

// Examples:

// Input: num = 6457819
// Output: 5

// Input: num = 2537312
// Output: 0

function countHoles(num) {
  const hole = [1, 0, 0, 0, 1, 0, 1, 0, 2, 1];

  let holes = 0;

  while (num > 0) {
    // Last digit in num
    let d = num % 10;

    // Update holes
    holes += hole[d];

    // Remove last digit
    num = Math.floor(num / 10);
  }

  // Return the count of holes
  // in the original num
  return holes;
}

let num = 6457819;
console.log(countHoles(num));
