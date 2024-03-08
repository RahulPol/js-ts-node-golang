Conditional types in TypeScript allow you to create conditional logic functions within the type system.
Let's look at an example.
Here we have a generic type is number.
It takes the type as a generic input, stores it in type T and then checks if type T extends the type
number.
And if that condition is true, returns the literal type number, otherwise returns the literal type.
Other These types are called conditional types because of the use of the conditional operator.
This is modeled after the conditional operator within JavaScript.
People often also call this the ternary operator because this is the only operator within JavaScript
that has three inputs a condition a result when the condition is true and a result when the condition
is false.
Now our isnumber utility function over here can be invoked with any JavaScript value.
For example, it can be invoked with the number or it can be invoked with a string.
The same is true of our isnumber type function.
It can be invoked by passing in a generic for the type t.
For example, we can pass in a number as type T, or we can pass in something else like a string.
The logic for these types is run within the TypeScript type system.
When the type number is passed in for t.
TypeScript sees that number extends number.
It understands that to be true and returns the literal type number.
And we can see that when we hover over the result.
Similarly, when the type string is passed in for T, TypeScript sees string extends number.
It understands that to be false and returns a literal type.
Other.
And we can see that when we hover over the result.
This comparison between JavaScript and TypeScript gives you a mental model of how to think about conditional
types.
The key difference is that while the JavaScript is executed by the JavaScript runtime and works with
runtime values, the type function is executed by the TypeScript compiler at compile time and works
with TypeScript types.
Now let's look at a use case of conditional types.
Here we have a TypeScript conditional type that works with all of the types that are supported by the
JavaScript typeof operator.
We can use this conditional type as the return type of a generic function within the function body.
We simply return the result of the JavaScript typeof operator.
Our type name is modeling at compile time with the JavaScript type of t will do at runtime.
Let's invoke this function with all of the primitives that the JavaScript runtime supports.
For all of these cases, TypeScript will correctly infer at compile time what the return value will
be at runtime.
For example, when it is invoked with a value undefined, the JavaScript runtime returns type of undefined,
which will be the literal string undefined.
And we have correctly inferred that if we hover over the result, the same is true for other invocations
as well.
We've successfully inferred at compile time the runtime return result of all of these function calls.
Let's walk through this boolean example.
When we invoke type name with the literal true, TypeScript infers the type of the input argument to
be boolean and therefore T is boolean.
Now the return type is annotated to be type name of boolean.
TypeScript goes to the conditional type and the only condition that matches is T extends boolean, and
therefore TypeScript infers the return type to be the literal boolean.
And we can see that inference when we hover over the result.
Now, one thing that you might find surprising is that the inferred result of invoking the function
with Null is the literal type object.
And no, this is not a bug.
This is just how the JavaScript runtime works with type of null.
It actually returns the string object.
But fortunately with TypeScript, our type name function can be better than the built in type of operator
In JavaScript.
First, we add an additional condition to the type name conditional type to check if t extends null
and return the literal null.
And then within our runtime type name function we add a condition to check if t is null to return the
literal null.
And with these two changes in place, our runtime result will be null and it is also inferred correctly
at compile time.
Now we can easily keep on adding other conditions to the conditional type and to our runtime function
to make a type name utility that is specific to our project and meets our needs more than the built
in JavaScript runtime support.
