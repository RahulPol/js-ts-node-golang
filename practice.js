function promiseTimeLimit(fn, timeLimit) {
  let result;

  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args).then((res) => (result = res));

      setTimeout(() => {
        if (result) {
          resolve(result);
        }
        reject("time limit exceeded");
      }, timeLimit);
    });
  };
}

const fn = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
  },
  inputs = [5],
  t = 150;

const timeLimitedPromise = promiseTimeLimit(fn, t);
timeLimitedPromise(inputs)
  .then((res) => console.log(res))
  .catch((reason) => console.log(reason));
