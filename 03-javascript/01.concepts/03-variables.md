## Variables

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

```js
let message;

message = "Hello"; // store the string 'Hello' in the variable named message
```

The string is now saved into the memory area associated with the variable. We can access it using the variable name

```js
alert(message);
```

We can also declare multiple variables in one line, some people also define multiple variables in this multiline style:

```js
let user = "John",
  age = 25,
  message = "Hello";
```

### var instead of let

In older scripts, you may also find another keyword: var instead of let:

```js
var message = "Hello";
```

The var keyword is almost the same as let. It also declares a variable but in a slightly different, “old-school” way.
There are subtle differences between let and var, but they do not matter to us yet. We’ll cover them in detail in the chapter The old "var".

**Declaring twice triggers an error**
A variable should be declared only once. A repeated declaration of the same variable is an error:

```js
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared
```

So, we should declare a variable once and then refer to it without let.

### Variable naming

There are two limitations on variable names in JavaScript:

1. The name must contain only letters, digits, or the symbols $ and \_.
2. The first character must not be a digit.

When the name contains multiple words, camelCase is commonly used.

### Reserved names

There is a [list of reserved words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), which cannot be used as variable names because they are used by the language itself.

For example: let, class, return, and function are reserved.

### An assignment without use strict

Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

```js
// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5
```

## Constants

To declare a constant (unchanging) variable, use const instead of let:

```js
const myBirthday = "18.04.1982";
```

Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:

```js
const myBirthday = "18.04.1982";

myBirthday = "01.01.2001"; // error, can't reassign the constant!
```
