## Basic operators, Math

In this chapter, we’ll start with simple operators, then concentrate on JavaScript-specific aspects.

### Terms: “unary”, “binary”, “operand”

`An operand` – is what operators are applied to. For instance, in the multiplication of 5 \* 2 there are two operands: the left operand is 5 and the right operand is 2.

An operator is `unary` if it has a single operand. For example, the unary negation - reverses the sign of a number:

```js
let x = 1;

x = -x;
alert(x); // -1, unary negation was applied
```

An operator is `binary` if it has two operands. The same minus exists in binary form as well:

```js
let x = 1,
  y = 3;
alert(y - x); // 2, binary minus subtracts values
```

### Maths

The following math operations are supported:

- Addition +,
- Subtraction -,
- Multiplication \*,
- Division /,
- Remainder %,
- Exponentiation \*\*.

```js
alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(8 % 4); // 0, the remainder of 8 divided by 4

alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16

alert(4 ** (1 / 2)); // 2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cubic root)
```

### String concatenation with binary +

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:

```js
let s = "my" + "string";
alert(s); // mystring
```

Note that if any of the operands is a string, then the other one is converted to a string too.

```js
alert("1" + 2); // "12"
alert(2 + "1"); // "21"

alert(2 + 2 + "1"); // "41" and not "221"
alert("1" + 2 + 2); // "122" and not "14"
```

The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

```js
alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers
```

### Numeric conversion, unary +

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

```js
// No effect on numbers
let x = 1;
alert(+x); // 1

let y = -2;
alert(+y); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0
```

It actually does the same thing as Number(...), but is shorter.

**Pending...**
