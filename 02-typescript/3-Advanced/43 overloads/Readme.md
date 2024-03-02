Here we have a function called reverse that can be called with a string or a string array.
And if it is a string, then it splits the string into its characters, reverses them, and then finally
joins them back to return the reversed string.
Alternatively, if it is invoked with the string array, it creates a copy of the array using slice
and returns the reversed version of that array.
So if we invoke this function with the string, hello, we get the reversed string.
And similarly, if we invoke it with an array of characters, we get back a reversed array of characters.
Now we know that if the input is a string, then the output of the function is a string.
And if the input is a string array, then the output is a string array.
However, as far as the inference engine in TypeScript is concerned, there are two possible ways that
the function can return.
It can either return a string or it can return a string array, and TypeScript infers the return type
of the function to be a string or string array.
So if we hover over the first variable, you can see that TypeScript thinks that it might be a string
or a string array, and the same is true for the second variable.
Now the solution to this problem is function overloading.
We can declare multiple signatures for any given function before the function body.
So we declare a function signature such that it takes an input string and it outputs a string and another
signature specifying that when it takes a string array, it returns a string array.
Now, with these two function overloads in place, TypeScript knows that when this function is invoked
with a string, it returns a string and infers that correctly for the first function call.
Similarly, it correctly infers a string array for the second function call.
Now function overloading in TypeScript is compile time only.
That is, these signatures are not a part of the output JavaScript.
This is why we are only allowed to have one body for the function which must handle all the overload
cases.
For example, here we are using a type of check to determine which code block we want to execute.
Additionally, adding overloads shadows the internal function signature.
So let's look at another example to demonstrate that.
Here we have a function called Make Date designed to help us make date objects within the function.
We check if a month and day were passed in, and in that case we assume that the arguments are the year,
the month and the day.
Otherwise, we assume that the first argument is the timestamp.
That is the time in milliseconds since epoch.
So we can create an instance of the date using the make date function passing in the year 2000, month
ten and day first.
Similarly, we can create a date by passing in the time since epoch and let's just pass in zero to create
the date of epoch.
Now if someone were to look at just the function signature, they very well might assume that you should
be able to pass in just the year and the month.
However, when we look at the code, you can see that if day is not passed in, then the second code
block will execute and in that case, the month argument will be completely ignored and the year argument
will actually be thought of as a timestamp in milliseconds.
However, with the single function signature that we have right now, we are able to invoke the make
date function with two arguments.
Once more.
The solution to this problem is to declare function overloads.
So we create a function overload.
We we accept a timestamp of type number and specify that we will return a date and then another function
signature where we specify that we will take three arguments, which is year, month and day, and then
return the date.
Now when we declare the overloads, it essentially shadows the internal function signature.
And now externally, there are only two possible ways to invoke the function one with the timestamp
and one with year, month day.
So now TypeScript is correctly highlighting the fact that you cannot invoke the make date function with
just two arguments and we can get rid of this incorrect function call.
So now you might be wondering why we need to have an implementation signature when it is not visible
to consumers of our API.
Well, the reason is that the implementation signature is there only for the author of the function
to declare how they would like to handle all of the possible cases declared by the overloads.
This is the only function signature that is visible within the body of the function.
