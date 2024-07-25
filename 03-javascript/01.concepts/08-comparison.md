## Comparisons

In JavaScript they are written like this:

- Greater/less than: a > b, a < b.
- Greater/less than or equals: a >= b, a <= b.
- Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
- Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

### Boolean is the result

All comparison operators return a boolean value:

- true – means “yes”, “correct” or “the truth”.
- false – means “no”, “wrong” or “not the truth”.

### String comparison

To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
For example:

```js
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true
```

### Comparison of different types

When comparing values of different types, JavaScript converts the values to numbers.

For example:

```js
alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1
```

### Strict equality

A regular equality check == has a problem. It cannot differentiate 0 from false:

```js
alert(0 == false); // true

// same for empty string
alert("" == false); // true
```

This happens because operands of different types are converted to numbers by the equality operator ==. An empty string, just like false, becomes a zero.

**A strict equality operator === checks the equality without type conversion.**
