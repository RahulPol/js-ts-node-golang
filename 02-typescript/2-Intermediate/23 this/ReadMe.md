Here we have a simple JavaScript class called person that takes an initial value for the age property
and then provides two methods one grow old, which increments the age property, and then a method called
age which returns the current age of the person.
Then we create an instance of the person with an initial age of zero.
Call the grow old method to increment the age to one and then log out the age.
And of course, if you run this code, we expect it to log out the age of one.
There are two ways to think about the this keyword in JavaScript.
One way is the calling context.
The other way is lexically scoped.
Other than arrow and bound functions, this is driven by the calling context.
Since the global method is not an error function, this will be driven by the calling context.
So when we are invoking grow old on the person object, this will be person.
Now, as we've discussed before, functions in JavaScript are first class and what this means is that
they can be stored in a variable.
So we can store the grow old method into a variable and then invoke it directly.
Now, in this case, since the method is not being invoked on any object, the calling context and therefore
the keyword, this will be undefined within the function body.
And if we run this code, you can see that error shows up on the console.
Now, you might be tempted to think that you would never store a method in a variable and never end
up with this code in real world.
However, this method to variable assignment can occur quite easily.
For example, if you give this method to setTimeout to invoke later, this will be lost.
As far as the invocation within setTimeout is concerned, it will be the same as just calling the grow
old method by itself.
Fortunately, JavaScript also offers a lexically scoped this and the way to use that is with an arrow
function.
So instead of creating a simple method, we create grow old as a property pointing to an arrow function.
Arrow functions in JavaScript capture this from the surrounding context.
Since all property initializers execute at the end of the constructor, this will be bound to whatever
instance is present within the constructor.
And now, since it is no longer driven by the calling context, we don't need to worry about it being
invoked incorrectly.
And both are usages, both as a variable and within the setTimeout will work as expected.
So if we log out the age after two seconds, you can see that the answer is correct with the value of
two.
