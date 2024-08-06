## Function expression

In JavaScript, a function is not a “magical language structure”, but a special kind of value. There is another syntax for creating a function that is called a Function Expression.

```js
/** Function declaration */
function sayHi() {
  alert("Hello");
}

/** Function expression */
let sayHi = function () {
  alert("Hello");
};

alert(sayHi); // shows the function code
```

Please note that the last line does not run the function, because there are no parentheses after sayHi.

Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

We can copy a function to another variable:

```js
function sayHi() {
  // (1) create
  alert("Hello");
}

let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
```

### Callback functions

Let’s look at more examples of passing functions as values and using function expressions.

```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
```

The arguments showOk and showCancel of ask are called callback functions or just callbacks. The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer.

**When to choose Function Declaration versus Function Expression?**

As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
