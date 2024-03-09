/**
 * 
Promises in JavaScript are a way to handle asynchronous operations. They provide a cleaner and more manageable syntax compared to traditional callback-based approaches. Here's a comprehensive overview of promises in JavaScript:

1. What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation.
It can be in one of three states: pending, fulfilled, or rejected.
Promises are commonly used for handling asynchronous operations such as fetching data from a server, reading files, or making HTTP requests.

2. Creating a Promise:
A Promise is created using the Promise constructor, which takes a function as an argument. This function, called the executor, receives two functions as parameters: resolve and reject.
Inside the executor function, you perform an asynchronous operation, and when it's done, you call resolve if the operation is successful, or reject if it fails.
Ex: 
*/
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation

  if (/* operation successful*/ true) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

/*
3. Consuming a Promise:
Once a Promise is created, you can consume its value using the .then() and .catch() methods.
.then() is called when the Promise is resolved, and you can access the resolved value inside its callback function.
.catch() is called when the Promise is rejected, and you can handle errors inside its callback function.
Ex: 
*/
myPromise
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });

/*
4. Chaining Promises:
Promises can be chained using multiple .then() calls. Each .then() returns a new Promise, allowing you to perform sequential asynchronous operations.
Ex:
*/
myPromise
  .then((result) => {
    // Do something with result
    return anotherPromise; // Return a new Promise
  })
  .then((anotherResult) => {
    // Do something with anotherResult
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
5. Promise.all():
Promise.all() takes an iterable of Promises and returns a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
It is useful when you want to execute multiple asynchronous operations concurrently and wait for all of them to complete.
*/
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // Handle results
  })
  .catch((error) => {
    // Handle errors
  });

/*
6. Promise.race():
Promise.race() takes an iterable of Promises and returns a single Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.
It is useful when you want to perform multiple asynchronous operations and only care about the first one to complete.
Ex:
*/
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    // Handle result
  })
  .catch((error) => {
    // Handle error
  });

/*
7. Async/Await:
Async functions are a cleaner way to work with asynchronous code. They allow you to write asynchronous code that looks synchronous.
An async function returns a Promise implicitly, and you can use the await keyword to pause the execution of the function until a Promise is resolved.
Ex:
*/
async function fetchData() {
  try {
    const result = await myPromise;
    console.log("Data:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

/*
8. Error Handling:
Promises provide built-in error handling through the .catch() method. You can use this method to handle errors that occur during the asynchronous operation.
Ex:
*/
myPromise
  .then((result) => {
    // Do something with result
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
9. Promise API:
Promises also provide other methods like Promise.resolve() and Promise.reject() for creating resolved or rejected Promises immediately.
Ex:
*/
const resolvedPromise = Promise.resolve("Resolved value");
const rejectedPromise = Promise.reject("Error message"); // <-- This will throw an error as the promise immediately rejected. To avoid it please use following
rejectedPromise.catch((error) => console.error("Promise rejected:", error));

// https://jakearchibald.com/2023/unhandled-rejections/ <- READ THIS FOR SOME GOOD USE CASES AND GOTCHA OF PROMISE
// https://himynameistim.com/blog/parallel-api-calls-in-javascript <- READ THIS FOR PARALLEL CALLS

const successPromise = Promise.resolve("Success");

// The following promise will throw an error as the promise is rejected at the time of promise creation. To avoid it please use catch
const failurePromise = new Promise((resolve, reject) => {
  const randomValue = 0.3;
  if (randomValue > 0.5) {
    resolve(randomValue);
  } else {
    reject("Failure Promise: Error occurred!");
  }
});

failurePromise.catch((error) => console.error(""));

const test_promise_all = async (promises) => {
  try {
    const results = await Promise.all(promises);

    results.forEach((result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
};

// test_promise_all([successPromise, successPromise, failurePromise]);

const test_promise_race = async (promises) => {
  try {
    const result = await Promise.race(promises);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// In here if you keep failure first then error will come else success will come
test_promise_race([
  failurePromise,
  successPromise,
  successPromise,
  failurePromise,
]);
