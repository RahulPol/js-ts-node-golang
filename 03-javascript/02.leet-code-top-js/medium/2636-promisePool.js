// Description
// Given an array of asynchronous functions `functions` and a pool limit n, return an asynchronous function promisePool. It should return a promise that resolves when all the input functions resolve.

// Pool limit is defined as the maximum number promises that can be pending at once. promisePool should begin execution of as many functions as possible and continue executing new functions when old promises resolve. promisePool should execute functions[i] then functions[i + 1] then functions[i + 2], etc. When the last promise resolves, promisePool should also resolve.

// For example, if n = 1, promisePool will execute one function at a time in series. However, if n = 2, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.

// You can assume all functions never reject. It is acceptable for promisePool to return a promise that resolves any value.

// Example 1:

// Input:
// functions = [
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ]
// n = 2
// Output: [[300,400,500],500]
// Explanation:
// Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively.
// They resolve at 300ms, 400ms, and 500ms respectively. The returned promise resolves at 500ms.
// At t=0, the first 2 functions are executed. The pool size limit of 2 is reached.
// At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2.
// At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1.
// At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.

// Example 2:

// Input:
// functions = [
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ]
// n = 5
// Output: [[300,400,200],400]
// Explanation:
// The three input promises resolve at 300ms, 400ms, and 200ms respectively.
// The returned promise resolves at 400ms.
// At t=0, all 3 functions are executed. The pool limit of 5 is never met.
// At t=200, the 3rd function resolves. Pool size is 2.
// At t=300, the 1st function resolved. Pool size is 1.
// At t=400, the 2nd function resolves. Pool size is 0, so the returned promise also resolves.

// Example 3:

// Input:
// functions = [
//   () => new Promise(res => setTimeout(res, 300)),
//   () => new Promise(res => setTimeout(res, 400)),
//   () => new Promise(res => setTimeout(res, 200))
// ]
// n = 1
// Output: [[300,700,900],900]
// Explanation:
// The three input promises resolve at 300ms, 700ms, and 900ms respectively.
// The returned promise resolves at 900ms.
// At t=0, the 1st function is executed. Pool size is 1.
// At t=300, the 1st function resolves and the 2nd function is executed. Pool size is 1.
// At t=700, the 2nd function resolves and the 3rd function is executed. Pool size is 1.
// At t=900, the 3rd function resolves. Pool size is 0 so the returned promise resolves.

// Constraints:

// 0 <= functions.length <= 10
// 1 <= n <= 10

// The following function takes array of functions and execute them in lots, the second lot start only after completion of first lot. But that is not our goal.

function promisePoolPre(fnArray, limit) {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < fnArray.length; i = i + limit) {
      try {
        const functions = fnArray.slice(i, i + limit);
        const promises = functions.map((fn) => fn());
        const result = await Promise.all(promises);
        console.log(i);
        if (i == fnArray.length - 1) {
          resolve();
        }
      } catch (err) {
        reject();
      }
    }
  });
}

const functionsArr = [
  () => new Promise((res) => setTimeout(res, 300)),
  () => new Promise((res) => setTimeout(res, 400)),
  () => new Promise((res) => setTimeout(res, 200)),
];
n = 2;

// const d = functions.slice(0, 2);
// console.log(d);

const startTime = performance.now();

promisePoolPre(functionsArr, n).then((res) =>
  console.log(performance.now() - start)
); // 600ms, as in the first loop 2 promises executes which will be done at 400ms. then in the next iteration next 200ms will be done thus total = 400ms + 200ms

// The following code works as expected, checkout V3 for more cleaner approach
function promisePool(fnArray, limit) {
  let promises = [];
  let promiseCount = 0;
  let resolveCount = 0;
  let currPromise = 0;
  return new Promise((resolve) => {
    // for (let i = 0; i < fnArray.length; i++) {
    //   promises.push(fnArray[i]());
    // }

    function recursiveCall() {
      if (resolveCount == fnArray.length && promiseCount == 0) {
        resolve();
      }

      if (promiseCount <= limit && currPromise < fnArray.length) {
        promiseCount++;
        fnArray[currPromise++]().then((res) => {
          console.log(res);
          promiseCount--;
          resolveCount++;
          recursiveCall();
        });
      }
    }

    recursiveCall();

    //////////// FIRST TRY TO UNDERSTAND FOLLOWING, THEN UNDERSTANDING RECURRSION WOULD BE EASY//////

    // for (let i = 0; i < fnArray.length; i++) {
    //   promises.push(fnArray[i]());
    // }

    // promises.forEach((promise) => {
    //   promiseCount++;
    //   if (promiseCount <= limit) {
    //     // start promises in parallel until the limit specified
    //     promise.then((res) => {
    //       promiseCount--;
    //       resolveCount++;
    //       // when any promise is resolved add another promise, but there can be n-limit number of promises pending
    //       // so need a way to repeat the process of if loop, thus better go for recurssion
    //       promises[promiseCount].then();
    //       if (resolveCount == fnArray.length) {
    //         resolve();
    //       }
    //     });
    //   }
    // });
  });
}

// const functions = [
//     () => new Promise((res) => setTimeout(res("first called"), 300)),
//     () => new Promise((res) => setTimeout(res("second called"), 400)),
//     () => new Promise((res) => setTimeout(res("third called"), 200)),
//   ],
//   n = 2;

// const start = performance.now();

// promisePool(functions, n).then((r) => {
//   console.log(performance.now() - start);
// });

// let functions = [
//     () => new Promise((res) => setTimeout(res, 300)),
//     () => new Promise((res) => setTimeout(res, 400)),
//     () => new Promise((res) => setTimeout(res, 200)),
//   ],
//   n = 2;

// let start = Date.now();
// const pool = promisePool(functions, n);

// pool()
//   .then((res) => console.log(Date.now() - start))
//   .catch((err) => console.log(err));

function promisePoolV3(functions, n) {
  let inProgressCount = 0;
  let functionIndex = 0;
  return new Promise((resolve) => {
    function helper() {
      if (functionIndex >= functions.length) {
        if (inProgressCount == 0) resolve();
        return;
      }

      while (inProgressCount < n && functionIndex < functions.length) {
        inProgressCount++;
        const promise = functions[functionIndex]();
        functionIndex++;
        promise.then(() => {
          inProgressCount--;
          helper();
        });
      }
    }

    helper();
  });
}
