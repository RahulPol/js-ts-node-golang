## Interaction: alert, prompt, confirm

### Alert

alert shows a message and waits for the user to press “OK”.
For example:

```js
alert("Hello");
```

### Prompt

The function prompt accepts two arguments:

```js
result = prompt(title, [default]);
```

`title`: The text to show the visitor.

`default`: An optional second parameter, the initial value for the input field.

The call to prompt returns the text from the input field or null if the input was cancele

```js
let age = prompt("How old are you?", 100);

alert(`You are ${age} years old!`); // You are 100 years old!
```

### Confirm

The function confirm shows a modal window with a question and two buttons: OK and Cancel.

The result is true if OK is pressed and false otherwise.
For example:

```js
let isBoss = confirm("Are you the boss?");

alert(isBoss); // true if OK is pressed
```
