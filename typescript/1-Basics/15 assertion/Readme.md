Here we have a variable that is initialized by a function call.
Now we know that this function is returning a string, so we try to use the variable as a string and
trim its value and we get a compile time error.
Now, the reason for the error in this particular case is that the load function is annotated to return
an unknown type.
It is possible in TypeScript to end up in a situation where either the function annotation is incorrect
or the type inferred by the TypeScript compiler does not match what you know the value of the variable
to be.
Of course, for the unknown type, in this particular case, we can add a JavaScript runtime type check
to ensure that the value of the variable hello is string before calling the trim function.
Now you might not want to add this runtime type check simply because of performance reasons, or you
want to save some time and simply develop your application without having to worry about the types.
For this reason, TypeScript provides you with the concept called type assertions, which you can use
to tell the compiler what the type of a variable is without having to do any of the type inference or
type checks with the string type assertion.
We are telling the TypeScript compiler that Dear compiler, trust me, I know this is a string.
You don't have to second guess it.
And with that in place we can use this variable hello as a string and call it string method.
The main syntax for a type assertion is the as keyword, followed by the type that you want to assert.
Now, TypeScript also provides an additional syntax for type assertions known as the angle bracket syntax,
where you put the type in angle brackets before the variable.
Now I don't recommend that you use the angle bracket syntax as it does not work in TSX files.
To demonstrate that let's copy this code into a TSX file.
Now TypeScript will immediately give you an error, and the reason for this error is that it thinks
that this is a JSX element instead of a type assertion.
Of course you can still do type assertions in TSX using the type syntax.
Now before we finish, beware that type assertions are your way of telling the compiler that you know
better than what it understands.
The ideal approach, of course, is to use proper type annotations or runtime JavaScript type checks
to ensure correct type inference.
