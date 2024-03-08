Here we have a conditional type that checks if the input generic extends an array, and if so, it returns
the literal type array.
Otherwise it returns the literal type.
Other.
So if we input something that is an array like a string array, we get back the literal array.
Otherwise, if we input something like a number, we get the literal other.
Now, if we continue our mental model of thinking of conditional types as little type functions, the
infer keyword can be thought of as a way to create variables within the function.
So the inputs of the type function are types, and the outputs of the type function are types.
Of course, the variables will also be types.
For example, we can create a variable out of the type of the array using the infer keyword and giving
that variable a name.
For example member.
And now this variable member becomes available for access if the condition is true.
Let's look at an example where we might want to create a variable within a conditional type.
Here we have a type that can be used to unbox the members of an array.
It checks if the input type extends an array, and if so, infers the members of the array.
And that is what is returned by the conditional type.
Otherwise it simply returns whatever type was input into the condition.
Let's look at a few examples where we use this type.
If we input string array, it does extend an array and the member is inferred to be string and that
is what is returned if we input a number array.
The same thing happens and in this case the member number is returned.
For anything else, like just the string type, it returns it back as it is.
Now let's add some JavaScript to look at a more practical use case of using conditional types with the
infer keyword.
Here we have a utility function that accepts two parameters first name and last name, and then it returns
an object containing three properties first name, last name, and full name.
We have another function in our code base that is designed to log a person and a person.
Is anything that has been created from this great person utility function.
Now, of course, at this point we could create an explicit type to annotate what a person should be.
But if you hover over the create person function, you can see that TypeScript already knows what a
person should be as the inferred return type of this function.
So if we could infer the return type of this function, we wouldn't need to create the person type explicitly.
So we create the conditional type return type that takes an argument of type T and checks if T extends
a function.
If it does extend a function, we infer the return value to be R, and that is what we return.
Otherwise we assume that the programmer has probably made an error passing in something that does not
extend a function and we return the special TypeScript type.
Never.
And now that we have this utility return type, we can invoke it on the type of create person, the
type of operator returns, the type inferred for the create person function.
And then our return type utility infers the return annotation.
So if you hover over the person alias, you can see that it is exactly what we wanted and now we can
use it to annotate our log person function.
Now you might be thinking that that was a lot of work for very little gain.
Well, the good news is that we don't need to create this return type ourself as it already ships as
a part of the TypeScript compiler.
Similarly, we don't need to create a type alias.
We can actually do it just in line.
And now if you ever end up in a situation where the input of one function depends upon the output of
another function, you can actually generate the type on the fly.
And if the output of the first function ever changes, you get a nice compiler error from TypeScript
and you can go ahead and fix that.
