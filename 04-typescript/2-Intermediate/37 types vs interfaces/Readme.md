Here we have an interface representing the kind of properties that a UI input element might accept.
For example, it has a member type which can be text or email, a current value for the input element
and a method to handle changes to the value.
We can achieve the same effect using a TypeScript type alias.
And you can see that the body of the interface has a 1 to 1 correspondence with what we are assigning
when creating the type alias.
Now a great thing about type aliases is that anything you put in a type position can be put as an assignment
for a type alias.
In fact, TypeScript even offers a refactoring that takes something in a type position and extracts
it out to a type alias.
So if you wanted, you can break out the onchange handler into a named type.
Similarly, you can create a type alias from primitive types like string and reuse it in the onchange
handler.
And you can even use the type alias for the union of text and email literals.
Now because interfaces must have a body.
They do not support these shorthand functions, syntax or the ability to create interfaces from primitive
types.
And if you want to give a name to a type union, you will have to use a type alias.
Additionally, there are other advanced features like conditional types that we will look at in a future
lesson which are only supported by type aliases.
So now let's take a step back and compare the pros and cons on the left.
We have features that are only supported by type aliases, and on the right we have features that are
only supported by interfaces.
So if you want any of the features that are shown on the screen right now, the choice will be made
for you.
But what about the common ground?
Well, really, the choice is up to you.
You can use whichever syntax you are more comfortable with and only use types or interfaces for the
specific features that are shown on screen.
Personally, my default stance is that I use types unless I need to use interfaces for a particular
reason.
For example, I'm working with an API that needs declaration merging or working in a code base that
has deep type hierarchies where extends fields a bit more natural than intersection types.
