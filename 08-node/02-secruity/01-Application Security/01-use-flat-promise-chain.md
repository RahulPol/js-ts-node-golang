### Use flat Promise chains

Asynchronous callback functions are one of the strongest features of Node.js. However, increasing layers of nesting within callback functions can become a problem. Any multistage process can become nested 10 or more levels deep. This problem is referred to as a "Pyramid of Doom" or "Callback Hell". In such code, the errors and results get lost within the callback. Promises are a good way to write asynchronous code without getting into nested pyramids. Promises provide top-down execution while being asynchronous by delivering errors and results to next .then function

Another advantage of Promises is the way Promises handle errors. If an error occurs in a Promise class, it skips over the .then functions and invokes the first .catch function it finds. This way Promises provide a higher assurance of capturing and handling errors.

If the module you are using does not support Promises, you can convert base object to a Promise by using `Promise.promisifyAll()`

The following code snippet is an example of "Callback Hell":

```js
function func1(name, callback) {
  // operations that takes a bit of time and then calls the callback
}
function func2(name, callback) {
  // operations that takes a bit of time and then calls the callback
}
function func3(name, callback) {
  // operations that takes a bit of time and then calls the callback
}
function func4(name, callback) {
  // operations that takes a bit of time and then calls the callback
}

func1("input1", function (err, result1) {
  if (err) {
    // error operations
  } else {
    //some operations
    func2("input2", function (err, result2) {
      if (err) {
        //error operations
      } else {
        //some operations
        func3("input3", function (err, result3) {
          if (err) {
            //error operations
          } else {
            // some operations
            func4("input 4", function (err, result4) {
              if (err) {
                // error operations
              } else {
                // some operations
              }
            });
          }
        });
      }
    });
  }
});
```

The above code can be securely written as follows using a flat Promise chain:

```js
function func1(name) {
  // operations that takes a bit of time and then resolves the promise
}
function func2(name) {
  // operations that takes a bit of time and then resolves the promise
}
function func3(name) {
  // operations that takes a bit of time and then resolves the promise
}
function func4(name) {
  // operations that takes a bit of time and then resolves the promise
}

func1("input1")
  .then(function (result) {
    return func2("input2");
  })
  .then(function (result) {
    return func3("input3");
  })
  .then(function (result) {
    return func4("input4");
  })
  .catch(function (error) {
    // error operations
  });
```

And using async/await:

```js
    function async func1(name) {
  // operations that takes a bit of time and then resolves the promise
}
function async func2(name) {
  // operations that takes a bit of time and then resolves the promise
}
function async func3(name) {
  // operations that takes a bit of time and then resolves the promise
}
function async func4(name) {
  // operations that takes a bit of time and then resolves the promise
}

(async() => {
  try {
    let res1 = await func1("input1");
    let res2 = await func2("input2");
    let res3 = await func3("input2");
    let res4 = await func4("input2");
  } catch(err) {
    // error operations
  }
})();
```
