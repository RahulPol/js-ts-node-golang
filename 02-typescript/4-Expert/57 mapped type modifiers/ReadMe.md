Here we have a type with properties of mixed modifiers.
We have type X as read only and type Y as optional.
To demonstrate the usage of math type modifiers, we create this utility map type that does nothing
other than map over the properties in T and simply map them out to whatever they are within the type
T.
So if we use this utility type on the type point, the output would be the same as the input that is
the same two members x as read only and y as optional.
Now we've already looked at how we can make the properties as read only in the output type by using
the read only modifier.
This makes all the properties as read only and you can see that Y has become read only in the output
type.
TypeScript also allows you to optionally add the plus sign before the read only modifier.
The output will be the same as without the plus token, but it might help you read better.
TypeScript also allows you to add the optional nature in the generated properties by using the question
mark token.
And now if you look at the generated type, you can see that X has become optional in the output result.
Now, just like the read only modifier, you can add a plus before the question mark token if it helps
you read better.
I personally do not use these plus tokens.
However, the reason why they are supported is that you can actually use a minus token to remove the
optional nature or the read only nature.
So if we use minus question mark, you can see that the optional nature of Y is removed in the generated
type.
Similarly, if we use minus read only, the read only nature of x will be removed in the generated type.
Now, to get more experience with map type modifiers, let's look at a use case.
Here we have a class designed to manage some state.
It takes an initial state and stores it in its current property and a method update to update the current
value with the next state object that is passed in.
We can create a new state object with members X and Y initialized to zero.
This makes type T for the state instance as x and y of type number so we can update the state to a new
x and y value by passing an object to the update method.
And indeed this does update the current state with the correct values.
However, notice the implementation of the update method.
If we provide an object that doesn't have all the members that are required by type T, it does automatically
fill them from the current object.
So we should be able to provide just the members that we want to update.
However, this results in a compile time error because next has been annotated to accept the full type
T, and we are not providing the X member anymore.
The solution to this problem is to generate a type such that it has the same members as type T, but
all of them are marked optional.
Now we can create a utility type function called partial that simply maps over an input type T and adds
the question mark modifier to all of the members.
And now we can annotate the next argument for the update function to be a partial of type T with this
type annotation in place, the error on the update call goes away.
Now creating a partial for any given input type is actually a common enough use case that we don't have
to code up this particular utility type ourself.
If we go ahead and delete our implementation, it falls back to a built in implementation provided by
the TypeScript compiler that achieves the same purpose.
And if you hover over the type, you can see that it is implemented by the TypeScript team exactly how
we wrote it right now.
