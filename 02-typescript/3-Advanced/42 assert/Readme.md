Here we have a type representing a person with a member name of type string and an optional member,
date of birth of type date.
Now, within the JavaScript ecosystem, it is common to have a function that asserts that a particular
condition is true.
So if the condition turns out to be false, it throws an error instead of doing a standard return.
Let's look at an example where we might use such a function.
Here we are loading the person from a network call.
Now, if the network call fails, our load person utility function returns null.
And this can be seen in the type inferred for the maybe person variable.
So before we try to use this person object, we use our utility assertion function to assert that maybe
person is not equal to null.
Now, from our understanding of this function, we know that if this function returns, we should be
able to access any of the properties of the person, for example, the name property.
However, if we do so, we get a compiler error.
If you hover over the error, you can see that TypeScript still thinks that maybe person might be null.
Now the reason for this error is that TypeScript does not do any implicit assertion checking.
However, it does support explicit assertion checking in the form of assertion functions to specify
that a particular function is an assertion function.
We need to add a return type annotation of the form asserts some parameter here.
The parameter we want to assert is called condition.
This tells the TypeScript compiler that this function only returns if the condition parameter is true.
Functions with such a return type annotation are called assertion functions.
Now that TypeScript understands the impact of calling this function, it knows that maybe person not
equal to null must have been true and therefore maybe person can only be of type person in addition
to assertion functions that simply assert if a passed in parameter is true.
You can create an assertion function to indicate that a passed in parameter is of a particular type.
Here we have a utility function which asserts that a passed in parameter is of type date.
If the value is an instance of date, it simply returns.
Otherwise, instead of doing a return, it throws an error.
Now, at this point it is not an assertion function as we haven't added an asserts annotation, but
let's demonstrate its intended usage before we add a proper annotation.
Now we want to read the date of birth of the person.
So we use this assert date function to ensure that date of birth is of type date.
Now we know that if this function returns, we should be able to access the date of birth as the type
of date, for example, invoke its two string method.
However, without a proper type annotation, we immediately get a compiler error and if you hover over
the error message, you can see that TypeScript still thinks that date of birth can be undefined.
The syntax for specifying that a function asserts a particular parameter to be of some type is asserts
parameter name is type.
Here we are saying that the assert date function only returns if the passed in parameter value is of
type date.
With this annotation in place, TypeScript successfully narrows the date of birth to be of type date,
allowing us to call the two string method.
As a final thought, you might have noticed that the syntax for assertion functions is very similar
to the syntax for user defined type guards, and you might be wondering when you should use an assertion
function and when you should use a user defined type guard.
Normally in your application code, you would use a user defined type guard as you do not want to be
throwing errors in your application code.
However, when writing application tests, you would use an assertion function as unhandled errors are
gracefully reported as a test failure by popular testing frameworks.
