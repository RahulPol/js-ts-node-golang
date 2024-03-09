Sometimes you do a perfectly valid type check on a variable, but then when you try to use the variable
types, it complains that it's not the type that you expect it to be.
The most likely cause for that is some form of temporal uncertainty.
And in this lesson we will look at why this occurs and how you can solve it.
So let's go to start off.
Here's an example of a real world use case that I've simplified, where someone was confused why TypeScript
was giving a compile time error.
First, here's the portion of the code that works perfectly fine without any compile time errors.
We get a string value from some API that might be a string or null.
Therefore we make sure that it is not null and then we use it as a proper string.
For example, calling the function to uppercase.
However, when we try to do the same thing, going through a simple for each loop over a JavaScript
array, we get a compile time error.
And if you look at the error message, you can see that typescript is complaining the suffix could possibly
be still now.
Now, of course, you and I both know that there is absolutely no way for this value to be possibly
null, but I still think so.
So let's look at another example that explains why this is the case.
Here we have an example variable that can be string or null, and then we ensure that it is not null
and try to use it as a string within a set timeout.
But before the set timer will actually execute, we set it null.
So in this particular case, TypeScript complaining that this can be possibly null is perfectly valid.
It is indeed actually going to be null in this example.
But this thing now is pure coincidence.
As far as TypeScript is concerned.
Whenever you use a callback, any of the text that you might have done on variables outside of that
callback are essentially discarded because TypeScript doesn't know when that callback will execute.
In the first case, the callback is executed synchronously and therefore suffix cannot be possibly null.
However, in the second case the callback is executed asynchronously and therefore indeed example can
be no.
Now the solution to the problem is pretty simple.
Once you've done a type check on a particular variable store, the reference to that particular variable
in a new one and TypeScript will automatically infer it to have that restricted type.
So for the first example, it will automatically infer suffix local to have the restricted type of type
string, and therefore you can use it as a string perfectly fine anywhere within this particular conditional
block.
And we can repeat the same process for the second reference as well.
We create a new variable called example local store.
The current value of example in there, and TypeScript will infer that it can only be a string and we
can use it as a string anywhere within the if block without any issues.
One of the big choices that the TypeScript team has to constantly make is the choice between type safety
versus developer convenience in this particular case.
The TypeScript team has gone for type safety, but this makes sense because, after all, callbacks
are traditionally a sign of delayed execution and after a delay, there's no certainty about any of
the particular values that you might have tested previously.
