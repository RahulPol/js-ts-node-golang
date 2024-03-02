JavaScript runtimes have two types to indicate the absence of a value.
If something hasn't been initialized, the runtime normally returns undefined and if something is currently
unavailable, the runtime returns null.
TypeScript provides literal type annotations for both of these values.
Now you will have to deal with both of these values even if you don't use them explicitly in your code.
Let's look at a few examples.
Here we have a class point with members X and Y of type number.
We create an instance of this point and then initialize the two members.
Now, if by any chance we forget to initialize any of these members and try to access that particular
member, the JavaScript runtime will return us the special value undefined.
Now just like Undefined Null is a part of many JavaScript runtime features.
For example, here we have a function that logs out the vowels of a particular input value string.
Internally, it uses the JavaScript built in string match method to find any of the vowels.
A-e-I-o-u.
This built in match method returns an array of matches if any are found.
For example, E and o match in the hello string.
However, if you pass in a string that does not have any vowels, for example the string sky.
This built in method returns null.
So as you can see, even without explicitly using the literals undefined or null, they might be handed
over to you by the JavaScript runtime and you will have to deal with both of them.
Fortunately, there is a neat way to handle both of them in your JavaScript code and the trick is using
the double equals operator.
Now it should come as no surprise that with the double equals operator null is equal to null and undefined
is equal to undefined.
However, what might be surprising is that undefined is also double equal to null.
This means we can use the double equals to null to check if a value is null or it is undefined.
Furthermore, double equals to null is not true for any other falsy values such as false or zero or
an empty string.
This means that we can use the double equals to null to explicitly check just for null and undefined
without having to worry about any other values leaking through.
As an example, consider a function that might return you a boolean or null or undefined.
That is, the result.
Returned can be one of these three types.
Now you can safely isolate null and undefined with the double equals to null check.
And in fact TypeScript understands this as well and will narrow the type for you to be just null and
undefined.
Alternatively, if you want to remove null and undefined from a particular set of types, the proper
way to do that in JavaScript is to use not equals to null.
Once more, TypeScript understands this as well and will correctly isolate that.
The result must be a boolean at this point as both null and undefined have been ruled out.
To give you a bit more practice with handling null and undefined in TypeScript, let's look at another
example.
Here we have a function called decorate that has a parameter value which has been annotated to accept
a string or null or undefined.
Now, within the function, if we try to access the value as a string, for example, try to call the
string trim method, we get a compile time error from TypeScript.
And if you look at the error message, you can see that TypeScript is complaining that value might be
null or undefined.
Now, using what we've learned just right now, we can isolate null and undefined from value by using
a double equals null check.
And in that particular case, we simply return the value back to the caller.
And if that condition is false, TypeScript now understands that value must be a string and will allow
you to safely call the trim method.
And now we have a nice decorate function that can work with strings as well as with nulls and undefined
with complete compile time type safety.
Now, one final thing worth mentioning is that null and undefined are only enforced as distinct types
when the TypeScript configuration has strict set to true or more specifically, the suboption strictnullchecks
set to true.
This is true in the default configuration created by TypeScript anyways, and I highly recommend that
you leave it as that for maximum type safety.
