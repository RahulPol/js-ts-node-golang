Here we have a type representing a square with a member size and a type rectangle with the members width
and height.
Then we have a type shape which can accommodate both squares and rectangles.
In our utility function area, in order to discriminate between the square and the rectangle, we check
if it has a member size to determine if it's a square and we check if it has a member width to determine
if it's a rectangle.
Now, these conditions are not explicitly clear that we're checking if something is a square or a rectangle.
We've discussed before how we can improve the situation by adding a common member between square and
rectangle of different literal types, thus forming a discriminated union.
However, if we do not want to modify the types themselves, we can still get the readability benefits
by creating user defined type guards.
We start off by copying this condition into a utility function called Square.
Notice that this function returns a boolean value.
A user defined type card is simply a function that returns a boolean value and is annotated in the form
parameter is type.
For example, here we have the parameter as shape and the type as square.
Here we are communicating with TypeScript and telling it that if this function returns true.
This means that shape is of type square.
Now, in terms of type inference, these user defined type guards behave exactly the same as the built
in type guards offered by JavaScript, for example, the in operator.
So we can replace the condition in our if block with a call to our user defined type guard.
And now TypeScript understands that within the block this means that shape must be a square.
And now we can repeat the process for the rectangle type.
Creating a function is rectangle that is annotated to return, shape is rectangle, and then internally
simply checks if width is present in the input shape.
And now we can replace a property check type guard with a much more meaningfully named function call.
