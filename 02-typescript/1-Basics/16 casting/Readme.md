Coming from other typed programming languages.
You might be familiar with the concept of type casting.
Here we have a variable of an undeclared type that we later initialize to a string.
And then if we want to use this variable as a number, you might be tempted to use a type assertion
of TypeScript to convert it to a number.
However, a type assertion is not the same as type casting.
This is because the value currently held by the variable will still be a string.
And if you try to compare it to a number at runtime, you will find that it is not a number because
its value is actually the string. 1337.
Now TypeScript doesn't support any special syntax for typecasting.
However, it understands how typecasting works in JavaScript, so you can use your JavaScript tricks
to do any typecasting that you need.
For example, a common way to convert a string to a number is using the plus operator before the string.
Now TypeScript understands the impact of using the plus operator.
So now if you hover over the number variable, you can see that TypeScript has inferred that it is going
to be a number.
Now this type of type manipulation within JavaScript documentation is called type coercion.
And with that in place, the variable number will be a number at runtime.
