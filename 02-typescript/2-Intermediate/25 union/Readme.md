One amazing feature within the TypeScript type system is type unions.
Let's consider a simple example to demonstrate the motivation.
Here we have a simple function that can operate on a string or an array of strings and within the function
body, if it is simply a string, it will trim it and return the result.
And if it is an array, it will trim each of the strings in the array and then join them with the space
and return the result.
Such functions which operate on a single item or an array of items is quite common within the JavaScript
ecosystem.
Currently in order to accept a string as well as an array of strings.
We have this function annotated as input type any.
However, this results in type unsafety.
For example, someone can pass in a number and now our code will blow up at runtime without any compile
time errors.
Fortunately, TypeScript allows you to create types as a union of predefined types.
For example, in our case, we want to accept only a string or an array of strings.
Once we've added this annotation, invalid usages are highlighted as a compile time error by TypeScript.
Now union types are simply a set of types separated by the pipe operator as shown over here.
You are free to use any type names separated by the pipe operator to create a union type.
Let's demonstrate that by another usage.
A common requirement in programming is to pair a string with some characters before it.
Here we have a function that achieves this objective.
If the input argument is a number, it pairs with the number of spaces.
Alternatively, you can pass in your own padding string and that is used prepended before the input
value.
And if the input is not a number or a string, this function throws a runtime error.
A naive approach would be to accept all inputs using the unknown type as we have done over here.
And indeed it does achieve the objective of accepting a number or a padding string.
However, just like any unknown accepts all types, and if someone were to call this function with something
that is not a number or a string, for example, a boolean, this function will throw a runtime exception.
Fortunately, once more we can catch this error by using a proper union type annotation for the padding
parameter.
In this case, we want to accept a number or a string and anything else will be caught as a compile
time error from TypeScript as shown over here.
Now, just like any other type annotation within TypeScript, you can extract a union type into its
own type alias, giving it a well defined name for better code readability.
Now if your unions are becoming a bit long, TypeScript allows you to split your union into multiple
lines.
Also, in order to increase the readability a bit more.
TypeScript allows you to optionally add a pipe before the first member in the union.
This has no impact on the semantics of the type and is purely there for code readability purposes.
