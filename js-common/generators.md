## Generators

Regular functions return only one, single value (or nothing).

Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.

### Generator functions

To create a generator, we need a special syntax construct: function\*, so-called “generator function”.

It looks like this:

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}
```

When such function is called, it returns a special object, called “generator object”, to manage the execution.
The main method of a generator is next(). When called, it runs the execution until the nearest yield <value> statement (value can be omitted, then it’s undefined). Then the function execution pauses, and the yielded value is returned to the outer code.

The result of next() is always an object with two properties:
value: the yielded value.
done: true if the function code has finished, otherwise false.

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
let generator = generateSequence(); // The function code execution hasn’t started yet.
alert(generator); // [object Generator]

let one = generator.next();
alert(JSON.stringify(one)); // {value: 1, done: false}

let two = generator.next();
alert(JSON.stringify(two)); // {value: 2, done: false}

// NOTE: 3 was returned from generator and not yielded
let three = generator.next();
alert(JSON.stringify(three)); // {value: 3, done: true}

// Now the generator is done.
```

New calls to generator.next() don’t make sense any more. If we do them, they return the same object: {done: true}.

If you have return statement in generator next yield will not be called.

function* f(…) or function *f(…)?
Both syntaxes are correct.
But usually the first syntax is preferred, as the star \* denotes that it’s a generator function, it describes the kind, not the name, so it should stick with the function keyword.

### Generators are iterable

We can loop over their values using for..of:

```js
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

// NOTE: it doesn't show 3
// It’s because for..of iteration ignores the last value, when done: true. So, if we want all results to be shown by for..of, we must return them with yield
for (let value of generator) {
  alert(value); // 1, then 2
}

//As generators are iterable, we can call all related functionality, e.g. the spread syntax ...:
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 3
```
