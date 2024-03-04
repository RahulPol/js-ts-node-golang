// arr is a list of characters
let fn1 = (arr) => {
  let ans = [];
  for (const c of arr) {
    ans.push(c);
  }

  return ans.join("");
};

// In JavaScript, benchmarking shows that concatenation with += is faster than using .join().
let fn2 = (arr) => {
  let ans = "";
  for (const c of arr) {
    ans += c;
  }

  return ans;
};
