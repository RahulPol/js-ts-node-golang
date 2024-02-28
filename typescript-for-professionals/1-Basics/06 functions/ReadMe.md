Let's create a simple JavaScript function that is designed to add two numbers.
Now, just like we can annotate variables, we can also annotate the parameters of a function.
TypeScript also allows us to annotate the return type of a function using the same familiar syntax.
Now you can have a function in JavaScript that is not designed to return any value.
Now, if a function does not return any value, you can annotate its return type using the special TypeScript
built in type called void.
Now JavaScript also allows you to create a function that can take an indefinite number of arguments.
The way to indicate this in JavaScript is using three dots before the parameter, and such a parameter
is called a rest parameter.
Here we have a function sum that you can invoke with as many numbers as you want.
Internally, all these arguments get collected into a JavaScript array for the rest parameter.
TypeScript understands this and will enforce that.
You annotate the rest parameter as an array.
For our sum function we expect only numbers, so we have annotated it as an array of numbers.
Now JavaScript also supports first class functions.
What this means is that we can store functions in a JavaScript variable.
Now TypeScript understands this and provides a nice shorthand syntax for declaring variables of a function
type.
The syntax consists of listing out the parameters between brackets, each parameter with their own type
annotation, followed by the arrow operator and the return type.
Now, as you mentioned before, anything that is used as a type annotation in TypeScript can be given
a name using a type alias.
So if we wanted, we could create function types once and use them again and again.
Finally, it is worth mentioning that the shorthand syntax for TypeScript function types is actually
inspired by the arrow functions that are supported by modern JavaScript.
