## Functions

Quite often we need to perform a similar action in many places of the script. Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

### Function declaration

To create a function we can use a function declaration.

It looks like this:

```js
function showMessage() {
  alert("Hello everyone!");
}

showMessage();
showMessage();
```

The function keyword goes first, then goes the name of the function, then a list of parameters between the parentheses (comma-separated, empty in the example above, we’ll see examples later) and finally the code of the function, also named “the function body”, between curly braces.

Our new function can be called by its name: `showMessage()`.

### Local variables

A variable declared inside a function is only visible inside that function.

For example:

```js
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function
```

### Outer variables / Global variables

A function can access / modify an outer variable as well. If a same-named variable is declared inside the function then it shadows the outer one.

```js
let userName = "John";
let message = "hi";

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = "Hello, "; // shadows outer message
  message = message + username;
  alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function
```

Variables declared outside of any function, such as the outer userName in the code above, are called global. It’s a good practice to minimize the use of global variables to avoid discrepancy. Modern code has few or no globals.

### Parameters

We can pass arbitrary data to functions using parameters.
A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).

**Default Values**
If a function is called, but an argument is not provided, then the corresponding value becomes undefined. We can specify the so-called “default” (to use if omitted) value for a parameter in the function declaration, using =,

```js
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given
```

### Returning a value

A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:

```js
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3
```

**A function with an empty return or without it returns undefined**

**Never add a newline between return and the value**
For a long expression in return, it might be tempting to put it on a separate line.
That doesn’t work, because JavaScript assumes a semicolon after return. like this:

```js
return; // js will automatically add semicolon after return
some + long + expression + or + whatever * f(a) + f(b);
```

If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:

```js
return (
  some + // adding multiline
  long +
  expression +
  or +
  whatever * f(a) +
  f(b)
);
```
