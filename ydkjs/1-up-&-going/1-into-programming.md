# Into programming

Up & Going is an introduction to several basic concepts of programming and how to approach and understand the rest of the titles in this series. Especially if you’re just getting into programming and/or JavaScript, this book will briefly explore what you need to get up and going.

### Code

A program, often referred to as source code or just code, is a set of special instructions to tell the computer what tasks to perform. Usually code is saved in a text file, although with JavaScript you can also type code directly into a developer console in a browser.

The rules for valid format and combinations of instruction referred to as its syntax, much the same as English tells you how to spell words and how to create valid sentences using words and punctuation

### Statements

In a computer language, a group of words, numbers, and operators that performs a specific task is a statement. In JavaScript, a statement might look as follows

a = b \* 2;

The characters a and b are called variables. In programs, variables hold values (like the number 42) to be used by the program. Think of them as symbolic placeholders for the values themselves.

By contrast, the 2 is just a value itself, called a literal value, because it stands alone without being stored in a variable.

The = and \* characters are operators -- they perform actions with the values and variables such as assignment and mathematical multiplication.

Most statements in JavaScript conclude with a semicolon (;) at the end, but this is not a hard rule.

Programs are just collections of many such statements, which together describe all the steps that it takes to perform your program’s purpose.

### Expressions

Statements are made up of one or more expressions. An expression is any reference to a variable or value, or a set of variable(s) and value(s) combined with operators.

For Eg.
a = b _ 2;
This statement has four expressions in it:
• 2 is a literal value expression.
• b is a variable expression, which means to retrieve its current
value.
• b _ 2 is an arithmetic expression, which means to do the multi‐
plication.
• a = b _ 2 is an assignment expression, which means to assign
the result of the b _ 2 expression to the variable a (more on
assignments later).

A more common expression statement is a call expression statement, , as the entire statement is the function call expression itself:
→ alert( a );

### Statement vs Expression

Return value: Expressions return a value when they are evaluated, whereas statements do not.
Usage: Expressions are typically used where a value is expected, such as in assignments or function calls, while statements are used to control the flow of execution or declare program structures.
Composition: Expressions can often be composed together to form larger expressions, while statements typically stand alone as complete units of execution.
Immutability: Expressions do not change program state, whereas statements may modify program state.
In summary, expressions produce values, whereas statements perform actions. Understanding the distinction between the two is essential for writing clear and effective JavaScript code.

### Executing a Program

How do those collections of programming statements tell the computer what to do?

A special utility on the computer (either an interpreter or a compiler) is used to translate the code you write into commands a computer can understand.

For some computer languages, this translation of commands is typically done from top to bottom, line by line, every time the program is run, which is usually called interpreting the code.

For other languages, the translation is done ahead of time, called compiling the code, so when the program runs later, what’s running is actually the already compiled computer instructions ready to go.

It’s typically asserted that JavaScript is interpreted, because your JavaScript source code is processed each time it’s run. But that’s not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.(This behavior will be observed in Scope & Closure series).

### Try It Yourself

First, I suggest opening up an empty tab in your browser. I prefer to do this by typing about:blank into the address bar. Then, make sure your developer console is open.
For info on console - https://blog.teamtreehouse.com/mastering-developer-tools-console

Now, type this code and see how it runs:
a = 21;
b = a \* 2;
console.log( b );
// Output → 42

### Input

The most common way that happens is for the HTML page to show form elements (like text boxes) to a user that she can type into, and then use JS to read those values into your program’s variables.
But there’s an easier way to get input, use the prompt(..) function:

age = prompt( "Please tell me your age:" );
console.log( age );

Once you submit the input text by clicking “OK,” the value you typed is stored in the age variable, which we then output with console.log(..).

### Operators

Operators are how we perform actions on variables and values.

Eg.
The \* operator performs mathematical multiplication.
The = equals operator is used for assignment—we first calculate the value on the right-hand side (source value) of the = and then put it into the variable that we specify on the left-hand side (target variable).

While not technically an operator, you’ll need the keyword `var` in every program, as it’s the primary way you declare (aka create) variables.

Here are some of the most common operators in JavaScript:

- Assignment
  =, as in a = 2.
- Math

* (addition), - (subtraction), _ (multiplication), and / (division), as in a _ 3.Compound assignment +=, -=, \*=, and /= are compound operators that combine a math operation with assignment, as in a += 2 (same as a = a + 2).

- Increment/decrement
  ++ (increment), -- (decrement), as in a++ (similar to a = a + 1).
- Object property access
  . as in console.log().
- Equality
  == (loose-equals), === (strict-equals), != (loose not-equals), !== (strict not-equals)
- Comparison
  < (less than), > (greater than), <= (less than or loose-equals), >= (greater than or loose-equals), as in a <= b.
- Logical
  && (and), || (or), as in a || b that selects either a or b.

### Values & Types

When you express values in a program, you choose different representations for those values based on what you plan to do with them. These different representations for values are called types in programming terminology. JavaScript has built-in types for each of these so-called primitive values:

• When you need to do math, you want a number.
• When you need to print a value on the screen, you need a string (one or more characters, words, or sentences).
• When you need to make a decision in your program, you need a boolean (true or false).

Values that are included directly in the source code are called literals. string literals are surrounded by double quotes ("...") or single quotes ('...')—the only difference is stylistic preference. number and boolean literals are just presented as is (e.g., 42, true, etc.).

Beyond string/number/boolean value types, it’s common for programming languages to provide arrays, objects, functions, and more. We’ll cover much more about values and types throughout this chapter and the next.

### Converting Between Types

If you have a number but need to print it on the screen, you need to convert the value to a string, and in JavaScript this conversion is called “coercion.”

Javascript provide both implicit and explicit coercion.
For eg.To explicitly convert if you want to convert a string into a number you can use Number(...) function, as below

var a = "42";
var b = Number( a );
console.log( a ); // "42"
console.log( b ); // 42

But a controversial topic is what happens when you try to compare two values that are not already of the same type, which would require implicit coercion.JavaScript will sometimes kick in and implicitly coerce values to the matching types.

While designed to help you, implicit coercion can create confusion if you haven’t taken the time to learn the rules that govern its behavior.

### Code Comments

In JavaScript, there are two types of comments possible: a single-line comment and a multiline comment.
Consider:
// This is a single-line comment
/_ But this is
a multiline
comment.
_/

### Variables

Most useful programs need to track a value as it changes over the course of the program. The easiest way to go about that in your program is to assign a value to a symbolic container, called a variable - so called because the value in this container can vary over time.

In some programming languages, you declare a variable (container) to hold a specific type of value, such as number or string, which is called as static typing otherwise known as type enforcement. Other languages allow a variable to hold any type of value at any time, also known as weak typing or dynamic typing.

JavaScript uses the latter approach, dynamic typing, meaning variables can hold values of any type without any type enforcement. As mentioned earlier, we declare a variable using the var statement —notice there’s no other type information in the declaration.

For eg.
var amount = 99.99;
amount = amount \* 2;
console.log( amount ); // 199.98
// convert `amount` to a string, and
// add "$" on the beginning
amount = "$" + String( amount );
console.log( amount ); // "$199.98"

The newest version of JavaScript at the time of this writing (commonly called “ES6”) includes a new way to declare variable using let and constants by using const.

### Blocks

In code we often need to group a series of statements together, which we often call a block. In JavaScript, a block is defined by wrapping one or more statements inside a curly-brace pair { .. }

var amount = 99.99;
// a general block
{
amount = amount \* 2;
console.log( amount ); // 199.98
}

This kind of standalone { .. } general block is valid, but typically, blocks are attached to some other control statement, such as an if statement or a loop.

### Conditionals

There are quite a few ways we can express conditionals (aka decisions) in our programs.

The most common one is the if statement.
var bank_balance = 302.13;
var amount = 99.99;
if (amount < bank_balance) {
console.log( "I want to buy this phone!" );
}

The if statement requires an expression in between the parentheses ( ) that can be treated as either true or false.
The if statement expects a boolean, but if you pass it something that’s not already boolean, coercion will occur. JavaScript defines a list of specific values that are considered “falsy” because when coerced to a boolean, they become false—these include values like 0 and "". Any other value not on the “falsy” list is automatically “truthy”—when coerced to a boolean they become true. Truthy values include things like 99.99 and "free"

List of falsy value in js

1. false
2. 0
3. -9
4. '' or ""
5. undefined
6. null
7. NaN

### Loops

Repeating a set of actions until a certain condition fails — in other words, repeating only while the condition holds—is the job of programming loops.

Types of loops in JS

1. for loop
   for (initialization; condition; increment/decrement) {
   // code to be executed
   }
2. while loop
   while (condition) {
   // code to be executed
   }
3. do...while loop
   do {
   // code to be executed
   } while (condition);
4. for...in loop: Used to iterate over the enumerable properties of an object. It iterates over all enumerable properties, including inherited ones.
   for (variable in object) {
   // code to be executed
   }
5. for...of Loop: Introduced in ES6, used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It provides a simpler syntax compared to for...in loop, as it directly retrieves the values instead of indices.
   for (variable of iterable) {
   // code to be executed
   }

### Functions

In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable. Here are the key aspects of functions in JavaScript:

Function Declaration:
Functions can be declared using the function keyword followed by a function name and a pair of parentheses containing optional parameters, followed by curly braces {} containing the function body.
function greet(name) {
console.log(`Hello, ${name}!`);
}

Function Expression:
Functions can also be defined using function expressions, where the function is assigned to a variable.
const greet = function(name) {
console.log(`Hello, ${name}!`);
};

Arrow Functions:
Arrow functions provide a concise syntax for defining functions. They are particularly useful for short anonymous functions.
const greet = (name) => {
console.log(`Hello, ${name}!`);
};

Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical context. This behavior is different from regular functions, where this depends on how the function is called.

```js
const obj = {
  name: "John",
  greet: function () {
    setTimeout(function () {
      console.log(`Hello, ${this.name}`); // This would log 'Hello, undefined' because 'this' refers to the global object inside the setTimeout callback
    }, 1000);
  },
};

// Using an arrow function to preserve the 'this' context
const obj = {
  name: "John",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // This would log 'Hello, John' because arrow functions inherit 'this' from the lexical context (obj)
    }, 1000);
  },
};
```

Function Invocation:
Functions are invoked using parentheses () with optional arguments passed inside.
greet('John'); // Output: Hello, John!

Function Parameters:
Functions can accept zero or more parameters, which are specified inside the parentheses of the function declaration or expression.

```js
function add(a, b) {
  return a + b;
}
```

Return Statement:
Functions can return values using the return statement. If no return statement is provided, the function returns undefined.

```js
function add(a, b) {
  return a + b;
}
```

Anonymous Functions:
Functions can be declared without a name. These are called anonymous functions and are often used as callback functions or immediately invoked function expressions (IIFE).

```js
function(a, b) {
    return a + b;
}(2, 3);
```

Function Scope:
Variables declared within a function are scoped to that function and are not accessible from outside the function unless explicitly returned or accessed through closures.

Higher-order Functions:
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

````js
function greetSomeone(greeting, name) {
    return `${greeting}, ${name}!`;
}
```

function sayHello(name) {
    return greetSomeone('Hello', name);
}
```

Named Function Expressions:
Functions defined as expressions can have a name, which is helpful for debugging and self-referencing within the function.
```js
const factorial = function calcFactorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n \* calcFactorial(n - 1);
    }
};
```
````

### Scope

In JavaScript, scope refers to the visibility and accessibility of variables and functions within your code. Any programming language require a well-defined set of rules for storing variables in some location, and for finding those variables at a later time.We’ll call that set of rules: scope. Scope is basically a collection of variables and rules defining how those variables are accessed by name.
There are two main types of scope in JavaScript:

Global Scope:
Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code, including inside functions and blocks.

```javascript
const globalVariable = "I am a global variable";

function myFunction() {
  console.log(globalVariable); // Output: I am a global variable
}

myFunction();
```

Local Scope:
Variables declared within a function or block have local scope. They are only accessible within the function or block where they are defined.

```javascript
function myFunction() {
  const localVariable = "I am a local variable";
  console.log(localVariable); // Output: I am a local variable
}

myFunction();
// console.log(localVariable); // Error: localVariable is not defined
```

Block-scoped variables were introduced in ECMAScript 6 (ES6) with the let and const keywords. Variables declared with let and const have block scope, meaning they are only accessible within the block in which they are defined.

```javascript
if (true) {
  const blockScopedVariable = "I am a block-scoped variable";
  console.log(blockScopedVariable); // Output: I am a block-scoped variable
}

// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
```

Lexical Scope:

JavaScript uses lexical scoping, which means that the scope of a variable is determined by its location within the code. When a variable is referenced, JavaScript looks up the scope chain to find the variable's value.

```javascript
const globalVariable = "I am a global variable";

function outerFunction() {
  const outerVariable = "I am an outer variable";

  function innerFunction() {
    console.log(globalVariable); // Accessible
    console.log(outerVariable); // Accessible
  }

  innerFunction();
}

outerFunction();
```

In this example, innerFunction() can access globalVariable and outerVariable because they are in its lexical scope.

Function Scope vs. Block Scope:

Before ES6, JavaScript only had function scope. Variables declared with var are function-scoped, meaning they are accessible anywhere within the function in which they are defined.

```javascript
function myFunction() {
  if (true) {
    var functionScopedVariable = "I am a function-scoped variable";
    console.log(functionScopedVariable); // Output: I am a function-scoped variable
  }
  console.log(functionScopedVariable); // Output: I am a function-scoped variable
}

myFunction();
```

However, variables declared with let and const are block-scoped, meaning they are accessible only within the block in which they are defined.

```javascript
function myFunction() {
  if (true) {
    let blockScopedVariable = "I am a block-scoped variable";
    console.log(blockScopedVariable); // Output: I am a block-scoped variable
  }
  // console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
}

myFunction();
```

Understanding scope is essential for writing predictable and maintainable JavaScript code, as it determines the visibility and accessibility of variables and functions. Improperly scoped variables can lead to bugs and unexpected behavior in your code.
