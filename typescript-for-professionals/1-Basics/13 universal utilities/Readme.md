Here we have a log function that we want to support logging for any type of variable that might be passed
into it.
Now you might be tempted to annotate such an input value as any.
However, doing so will result in a decrease in type safety.
An inexperienced developer might end up using the input value within the function in an unsafe manner
because there might only be thinking of a limited set of examples, for example, just the number type,
and then the code will blow up at runtime for anyone else because the body of the function is unsafe
for anything other than a number.
Now, the recommended way in TypeScript to accept all values within the function with type safety is
to use the unknown type.
Externally, your function still accepts all types just like any, but now internally you get type safety
when trying to use the variable in an unsafe manner.
So if you want to call some method on the parameter, you need to check that the passed in parameter
is actually of a type that supports that method.
