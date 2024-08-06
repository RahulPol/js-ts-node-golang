## Code structure

The first thing we’ll study is the building blocks of code.

### Statements

Statements are syntax constructs and commands that perform actions.
For example, here we split “Hello World” into two alerts:

```js
alert("Hello");
alert("World");
```

### Semicolons

A semicolon may be omitted in most cases when a line break exists.
This would also work:

```js
alert("Hello");
alert("World");
```

**In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!**
There are situations where JavaScript “fails” to assume a semicolon where it is really needed.

alert("Hello")
[(1, 2)].forEach(alert);

If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more. That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

Let’s note – it is possible to leave out semicolons most of the time. But it’s safer – especially for a beginner – to use them.

### Comments

Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

**One-line comments start with two forward slash characters //.**
**Multiline comments start with a forward slash and an asterisk /_ and end with an asterisk and a forward slash _/.**
