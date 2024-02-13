In the previous chapter, I introduced the basic building blocks of programming, such as variables, loops, conditionals, and functions. Of course, all the code shown has been in JavaScript. But in this chapter, we want to focus specifically on things you need to know about JavaScript to get up and going as a JS developer.

### Values and Types

In JavaScript, values are data that are stored or manipulated in variables. Each value in JavaScript has a type, which determines what kind of data it represents and what operations can be performed on it. Here are the basic types of values in JavaScript:

Primitive Types:

- Number: Represents numeric data, including integers and floating-point numbers.
- String: Represents textual data, enclosed in single or double quotes.
- Boolean: Represents a logical value, true or false.
- Null: Represents the intentional absence of any value. It is a special value that indicates the absence of an object value.
- Undefined: Represents a variable that has been declared but has not been assigned a value.
- Symbol: Introduced in ECMAScript 6 (ES6), represents a unique and immutable value that may be used as the key of an object property.
- BigInt: Introduced in ECMAScript 2020, represents arbitrary-precision integers.

Object Type:

- Object: Represents a collection of key-value pairs, where each key is a string (or Symbol) and each value can be any data type, including other objects. Properties can either be accessed with dot notation (i.e., obj.a) or bracket notation (i.e., obj["a"]).Bracket notation is useful if you have a property name that has special characters in it, like obj["hello world!"].
- Arrays: An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions.
- Functions: functions are a subtype of objects—typeof returns "function", which implies that a function is a main type—and can thus have properties, but you typically will only use function object properties (like foo.bar) in limited cases.

JavaScript uses dynamic typing, which means that variables can hold values of any type, and the type of a variable is determined dynamically at runtime based on the type of value assigned to it.

```js
// Number
const numberValue = 42;
console.log(typeof numberValue); // Output: "number"

// String
const stringValue = "Hello, World!";
console.log(typeof stringValue); // Output: "string"

// Boolean
const booleanValue = true;
console.log(typeof booleanValue); // Output: "boolean"

// Null
const nullValue = null;
console.log(typeof nullValue); // Output: "object" (typeof null is a recognized bug in JavaScript)

// Undefined
let undefinedValue;
console.log(typeof undefinedValue); // Output: "undefined"

// Symbol
const symbolValue = Symbol("foo");
console.log(typeof symbolValue); // Output: "symbol"

// BigInt
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); // Output: "bigint"

// Object
const objectValue = { key: "value" };
console.log(typeof objectValue); // Output: "object"

// Arrays
const arr = ["hello world", 42, true];
typeof arr; // "object"

// Functions
function foo() {
  return 42;
}
foo.bar = "hello world";
typeof foo; // "function"
typeof foo(); // "number"
typeof foo.bar; // "string"
```

### Built-In Type Methods

The built-in types and subtypes we’ve just discussed have behaviors exposed as properties and methods that are quite powerful and useful.

```js
var a = "hello world";
var b = 3.14159;
a.length; // 11
a.toUpperCase(); // "HELLO WORLD"
b.toFixed(4); // "3.1416"
```

When you use a primitive value like "hello world" as an object by referencing a property or method (e.g., a.toUpperCase() in the previous snippet), JS automatically “boxes” the value to its object wrapper counterpart (hidden under the covers).A string value can be wrapped by a String object, a number can be wrapped by a Number object, and a boolean can be wrapped by a Boolean object

### Comparing Values

There are two main types of value comparison that you will need to make in your JS programs: equality and inequality. The result of any comparison is a strictly boolean value (true or false), regardless of what value types are compared.

# Coercion

Coercion comes in two forms in JavaScript: explicit and implicit. Explicit coercion is simply that you can see from the code that a conversion from one type to another will occur, whereas implicit coercion is when the type conversion can happen as more of a nonobvious side effect of some other operation.

Here’s an example of explicit coercion:
var a = "42";
var b = Number( a );
a; // "42"
b; // 42--the number!

And here’s an example of implicit coercion:
var a = "42";
var b = a \* 1; // "42" implicitly coerced to 42 here
a; // "42"
b; // 42--the number!

### Truthy & falsy

The specific list of “falsy” values in JavaScript is as follows:
• "" (empty string)
• 0, -0, NaN (invalid number)
• null, undefined
• false

### Equality

There are four equality operators: ==, ===, !=, and !==.

The difference between == and === is usually characterized that == checks for value equality and === checks for both value and type equality. However, this is inaccurate. The proper way to characterize them is that == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called “strict equality” for this reason.

You should take special note of the == and === comparison rules if you’re comparing two non-primitive values, like objects (including function and array). Because those values are actually held by reference, both == and === comparisons will simply check whether the references match, not anything about the underlying values

```js
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";
a == c; // true
b == c; // true
a == b; // false
```

### Inequality

The <, >, <=, and >= operators are used for inequality, referred to in the specification as “relational comparison.” Typically they will be used with ordinally comparable values like numbers.

### Variables

In JavaScript, variable names (including function names) must be valid identifiers. An identifier must start with a-z, A-Z, $, or \_. It can then contain any of those characters plus the numerals 0-9
Generally, the same rules apply to a property name as to a variable identifier. However, certain words cannot be used as variables, but are OK as property names. These words are called “reserved words,” and include the JS keywords (for, in, if, etc.) as well as null, true, and false.

### Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed. This means that regardless of where variables and functions are declared within a scope, they are available for use throughout the entire scope.

There are two main aspects of hoisting in JavaScript:

1. Variable Hoisting:

Variable declarations (but not initializations) are hoisted to the top of their containing scope. This means that you can access a variable before it is declared, but its value will be undefined until it is explicitly assigned.

```js
console.log(myVar); // Output: undefined
var myVar = 42;
console.log(myVar); // Output: 42

// Behind the scenes, the code is interpreted as:

var myVar;
console.log(myVar);
myVar = 42;
console.log(myVar);
```

Note: Hoisting applies only to variable declarations using var. let and const declarations are hoisted, but they are not initialized, so accessing them before the actual declaration will result in a ReferenceError.

2. Function Hoisting
   Function declarations are also hoisted to the top of their containing scope, which means that you can call a function before it is declared in the code.

```js
myFunction(); // Output: "Hello, world!"
function myFunction() {
  console.log("Hello, world!");
}

// Behind the scenes, the code is interpreted as:
function myFunction() {
  console.log("Hello, world!");
}
myFunction();
```

Note: Function expressions (functions assigned to variables) are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function assignment.

```js
console.log(foo()); /// Uncaught TypeError: foo2 is not a function
var foo = function () {
  console.log(`test`);
};

// Behind the scenes, the code is interpreted as:
var foo;
console.log(foo()); /// Uncaught TypeError: foo2 is not a function
foo = function () {
  console.log(`test`);
};
```
