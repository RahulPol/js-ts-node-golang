// Write code that enhances all date objects such that you can call the date.nextDay() method on any date object and it will return the next day in the format YYYY-MM-DD as a string.

// Example 1:

// Input: date = "2014-06-20"
// Output: "2014-06-21"
// Explanation:
// const date = new Date("2014-06-20");
// date.nextDay(); // "2014-06-21"
// Example 2:

// Input: date = "2017-10-31"
// Output: "2017-11-01"
// Explanation: The day after 2017-10-31 is 2017-11-01.

Date.prototype.nextDay = function () {
  const date = new Date(this);
  date.setDate(this.getDate() + 1);
  return date.toISOString().slice(0, 10);
};

const d = new Date("2017-10-31");

console.log(d.nextDay());
