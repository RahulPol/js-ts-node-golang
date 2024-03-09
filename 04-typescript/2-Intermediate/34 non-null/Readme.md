It is entirely possible to end up in a situation where Typescript's code flow analysis cannot be sure
that a value is null or undefined.
Let's look at an example.
Here we have a type representing a point in two dimensional space with members X and Y of type number.
We declare an instance of this point and then create a utility function to initialize this instance.
Later on in our code we initialize this instance and then try to access its X and Y members.
At this point, you can see that TypeScript is giving us a compile time error.
The reason for this error is that TypeScript does not do deep code flow analysis and therefore does
not understand the impact of calling the initialize function.
Therefore, it assumes that point may or may not be still undefined.
And of course, we know that point can no longer be undefined and we can help TypeScript understand
this fact by using a non null assertion Operator.
So at any point with TypeScript still thinks that point might be undefined.
We use a postfix exclamation mark and this exclamation mark is what is known as a non null assertion,
just like other type assertions we have seen before, non null assertions are compile time only and
have no runtime impact.
So it is up to you to ensure that the value is indeed not going to be null or undefined.
So it is generally better to rewrite your code to avoid these non null assertions.
For example, in this particular case we can get rid of the dangling variable declaration and then rewrite
the initialize function to return us the point and then only create the variable after the function
has been invoked.
This ensures that the point variable is always initialized and we no longer need the non null assertions.
Now non null assertions can work on any variable or a member of a variable.
Let's demonstrate that with another example.
Here we have a type representing a person that always has a name but may optionally have an email that
can be string or null or undefined.
Next, we have a utility function to send an email, given an email address.
And just as an example, we have a mock implementation that logs out the email to the console.
Now, to ensure that a particular person is contactable, we have this utility function that checks
if person or email is equal to null or undefined.
And in that case, throws an error.
Now, if this function ever returns, that ensures that person dot email will not be null or undefined
and therefore it must be a string.
Now, in order to contact a particular person, we have this function that takes a person and the first
thing it does is ensures that person dot email will not be null or undefined by using a utility in show
contactable function.
So if this function returns, we should be able to safely invoke send email because we know that person
dot email must be a string.
However, once more, TypeScript has failed to infer this particular side effect of the ensure contactable
function and therefore thinks that person dot email might still be null or undefined.
Now, just like before, we can override this error by using a non null assertion that is putting an
exclamation mark after the value that TypeScript thinks might be null or undefined.
Also, just like before, it is up to you to ensure the correctness of your code at this point.
We can rewrite our code to make it a bit more easier for TypeScript to infer.
For example, we can take the assertion from the ensure contactable function and move that inline.
This triggers TypeScript code flow analysis 4% email and now TypeScript knows that person dot email
will not be null or undefined and therefore must be a string and will let us safely invoke the send
email function.
