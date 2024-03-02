When you use the TypeScript compiler to initialize a new TypeScript configuration using TSC minus minus
init.
The generated tsconfig.json has this option called strict, which is by default true.
Strict option is actually a collection of options and if you set strict to true, all of these options
are implicitly set to true.
If you set it to false, all of these options become false.
Now you can still override the individual options.
For example, you can set strict to true and set no implicit any to false.
And that will mean that all of the other options are still true.
But no implicit any is false.
Now let's look at the impact of setting strict to true or false with some examples.
On the left, we have a TypeScript file from a project with strict set to false.
And on the right we have a TypeScript file from a project with strict set to true.
Here we have a function that is designed to add two numbers.
Now for numbers, this function is perfectly fine.
And indeed when you invoke it with something like one and two, you get the expected result of three.
However, notice that we haven't provided any type annotations for the parameters first and second.
What this means is that TypeScript will infer them to be of type any allowing you to invoke the function
with all types, for example with two strings and you might think that it is perfectly fine to do so.
In this case, however, the result might be surprising.
You probably expected Hello world and instead you got world.
Hello.
This is because the developer of the Add function expected you to call it with numbers and the order
of parameters doesn't matter in that case.
So let's go ahead and copy all of this code from strict false to a project with strict.
True.
We immediately get two errors from TypeScript with strict.
True.
If you fail to provide type annotations for something that TypeScript cannot infer, it raises a compile
time error as an example.
The error for the first parameter is that parameter first implicitly has an any type.
Now the fix for this particular error is to add a type annotation and in our case, the proper type
annotation is the annotation for number.
And with these annotations in place any invalid usages?
For example, an invocation with strings will result in a compile time error and we can go ahead and
delete those.
Now, of course with strict mode, you are still allowed to explicitly add an any annotation.
For example, here we have a log function that can in reality work with any type so we can get rid of
the error on the value parameter by adding an explicit type annotation of any now error on an inferred
any is just one of the features that are provided by the strict compiler option.
Let's look at an example of a different feature here.
We have a class for a point in two dimensional space with members X and Y of type number and a method
move that allows you to shift the values of X and Y.
We can create an instance of this class and then provide values for the X and Y properties and then
use the move method to move these x and y by some amount and log out the result.
Now, at this point, all of this code is perfectly fine.
However, it is not great design.
We implicitly expect that the creator of the point has provided values for the X and Y members.
It is perfectly possible that we might end up with a point created where X and Y have not been provided.
In this case, the move function will have weird results.
That is, it will set x and y to not a number.
Now let's go ahead and copy this code over to our project with strict true.
We immediately get two compile time errors.
The errors are that the properties are not initialized and are not definitely assigned in the constructor.
What this means is that you might end up with a point with the X and y.
Members are not actually numbers.
Now, one of the ways in which we can fix this error is by ensuring that we actually initialize x and
Y in the constructor by taking the initial values as parameters.
And now if anybody wants to create a point, they will have to provide initial values, ensuring that
the X and Y members are always numbers for all instances of our points.
Now, these definite assignment checks are just another feature that is a part of the strict suite.
Let's look at another example of a different feature.
Here we have a type representing a user in a database with the properties, name and age, and then
we have an in-memory database of users with two members.
Now, if you want to get the age of a particular user, given the username, we can create a utility
function which accepts the name as a parameter, goes through the list of users to find the user with
the username, matches the input name and then finally returns the found user's age.
Now this code looks perfectly fine and indeed it does function if the user is found.
Now let's go ahead and copy this code over into our.
Project with strict true.
And as soon as we do that, you can see that TypeScript has found a potential error.
The error in this case is that we are trying to access the age property off of a user that may or may
not be found.
Now, this will result in an ugly runtime error like cannot read age of undefined.
Now, because TypeScript has caught this error at compile time, we can raise a nicer error like user
not found, which is the actual source of the issue.
And now, thanks to TypeScript code flow analysis, it knows that user will no longer be undefined and
allows you to access the age property.
Now, once more, this is just one of the features that is provided by strict.
Now let's jump back and discuss whether you should set strict to true or false.
Enabling this option is a programming preference if you prefer dynamic typing overall, but want as
much of the free benefits you can get from TypeScript set strict to false.
But if, like me and many other TypeScript developers, you want as much type safety as possible, you
should leave strict as true, which is the default option.
One final consideration worth mentioning is that if you are working in an education setting, you might
want strict as off to provide a more gradual introduction to TypeScript.
