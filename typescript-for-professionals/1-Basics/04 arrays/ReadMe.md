Now we've already looked at JavaScript arrays in a previous lesson and we have discussed how we can
annotate it using the array class name passing in the generic argument.
Now arrays appear quite heavily within JavaScript code, so TypeScript provides a nice shorthand syntax
for declaring arrays where you simply put in the type of the members of the array, followed by the
square brackets.
Now arrays can be of any length.
You can have an array of one item or an array of five items.
However, all items of the array must match the type that is used in the type annotation.
Here we have an array of numbers, so if we try to assign an array of strings to this variable, we
will get a compile time error from TypeScript.
Now sometimes you want to declare an array of a fixed length.
An example of that is an array with two numbers which can be used to represent a point in space.
A fixed length array is commonly called a tuple in programming jargon, and TypeScript supports declaring
tuples within its type system.
Here we've declared a tuple of two members, and both of these members must be of type number.
We can use this to represent a point in space in terms of usage.
We can assign any array of two numbers to this variable.
If you try to assign an array which has less than two items or more than two items, we will get a compile
time error from TypeScript.
Also, the members of the array need to match the type annotation.
Here we've said that both members of the array must be of type number, so if we try to assign an array
that has a string in there, you will get a compile time error from TypeScript.
