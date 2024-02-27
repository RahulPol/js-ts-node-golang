// Given a start date start, an end date end, and a positive integer step, return a generator object that yields dates in the range from start to end inclusive. All dates are in the string format YYYY-MM-DD. The value of step indicates the number of days between consecutive yielded values.

// Example 1:

// Input: start = "2023-04-01", end = "2023-04-04", step = 1
// Output: ["2023-04-01","2023-04-02","2023-04-03","2023-04-04"]
// Explanation:
// const g = dateRangeGenerator(start, end, step);
// g.next().value // '2023-04-01'
// g.next().value // '2023-04-02'
// g.next().value // '2023-04-03'
// g.next().value // '2023-04-04'
// Example 2:

// Input: start = "2023-04-10", end = "2023-04-20", step = 3
// Output: ["2023-04-10","2023-04-13","2023-04-16","2023-04-19"]
// Explanation:
// const g = dateRangeGenerator(start, end, step);
// g.next().value // '2023-04-10'
// g.next().value // '2023-04-13'
// g.next().value // '2023-04-16'
// g.next().value // '2023-04-19'
// Example 3:

// Input: start = "2023-04-10", end = "2023-04-10", step = 1
// Output: ["2023-04-10"]
// Explanation:
// const g = dateRangeGenerator(start, end, step);
// g.next().value // '2023-04-10'

// Constraints:

// new Date(start) <= new Date(end)
// 0 <= The difference in days between the start date and the end date <= 1000
// 1 <= step <= 100

function* dateRangeGenerator(start, end, step) {
  let i = new Date(start);
  while (i <= new Date(end)) {
    yield i.toISOString().slice(0, 10);
    i.setDate(i.getDate() + step);
  }
}

const dateGenerator = dateRangeGenerator("2024-01-01", "2024-01-10", 1);

for (const date of dateGenerator) {
  console.log(date);
}
