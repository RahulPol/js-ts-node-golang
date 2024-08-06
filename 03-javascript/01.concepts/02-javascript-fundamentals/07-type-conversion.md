## Type conversion

Most of the time, operators and functions automatically convert the values given to them to the right type. There are also cases when we need to explicitly convert a value to the expected type.

**Not talking about objects yet**
In this chapter, we won’t cover objects. For now, we’ll just be talking about primitives.

The three most widely used type conversions are to string, to number, and to boolean.
`String Conversion` – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

`Numeric Conversion` – Occurs in math operations. Can be performed with Number(value).

The conversion follows the rules:

| Value        | Becomes… |
| ------------ | -------- |
| undefined    | NaN      |
| null         | 0        |
| true / false | 1 / 0    |

string - The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are gnored. An empty string becomes 0. An error gives NaN.

`Boolean Conversion` – Occurs in logical operations. Can be performed with Boolean(value).

Follows the rules:
| Value | Becomes… |
| ------------------------- | -------- |
|0, null, undefined, NaN, ""| false |
|any other value | true |

Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

- undefined is NaN as a number, not 0.
- "0" and space-only strings like " " are true as a boolean.
