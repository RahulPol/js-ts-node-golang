### In modern JavaScript, there are two types of numbers:

1. Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”.
   2.BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1)

### More ways to write a number

```js
let billion = 1000000000;
```

We also can use underscore \_ as the separator:

```js
let billion = 1_000_000_000;
```

Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.

In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

```js
let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes
alert(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)

let mсs = 0.000001;
let mcs = 1e-6; // five zeroes to the left from 1
```

In other words, e multiplies the number by 1 with the given zeroes count.

### Hex, binary and octal numbers

Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: 0x and then the number. Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes:

```js
alert(0xff); // 255
alert(0xff); // 255 (the same, case doesn't matter)
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert(a == b); // true, the same number 255 at both sides
```

There are only 3 numeral systems with such support. For other numeral systems, we should use the function parseInt

### toString(base)

The method num.toString(base) returns a string representation of num in the numeral system with the given base.

```js
let num = 255;

alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

alert((123456).toString(36)); // 2n9c ..(two dots) is not typo
```

The base can vary from 2 to 36. By default it’s 10. Please note that two dots in 123456..toString(36) is not a typo. If we want to call a method directly on a number, like toString in the example above, then we need to place two dots .. after it.ecause JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now goes the method.

### Rounding

There are several built-in functions for rounding:

- Math.floor
  Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
- Math.ceil
  Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
- Math.round
  Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
- Math.trunc (not supported by Internet Explorer)
  Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

          Math.floor	Math.ceil	Math.round	Math.trunc

  3.1 3 4 3 3
  3.6 3 4 4 3
  -1.1 -2 -1 -1 -1
  -1.6 -2 -1 -2 -1

what if we’d like to round the number to n-th digit after the decimal?
There are two ways to do so:

1. Multiply-and-divide.

```js
let num = 1.23456;
alert(Math.round(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
```

2. The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.

```js

```
