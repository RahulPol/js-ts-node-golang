Here we have a type naught point 2D with members X and Y of type number and a type point 3D with members
X, Y and Z of type number.
And then we have a type person with a name and an email.
Then we create variables of each of these three types so we can do some type comparison between them.
Remember that types in TypeScript are structural.
This means that we can assign a point 3D to a point 2D without any errors because a point 3D does have
all the members that are required by a point 2D, which is X and Y.
However, we cannot assign a point 2D to a point 3D because a point 3D requires a member Z, and this
variable point two simply does not have that.
However, we can force this assignment to happen by using a type assertion.
Here we are saying that.
Dear TypeScript, I know you think this is a point 2D, but trust me it is a point 3D and TypeScript,
being a nice companion, happily agrees with you and trusts you completely.
However, this single assertion is sometimes not enough.
Let's look at an example.
We know that a point three cannot be assigned to a person, as there are no common members between them.
The same is true that we cannot assign a person to a point three because of this bidirectional incompatibility.
If we try to assign a person to a point three, even with a single assertion, TypeScript will still
complain.
And if you hover over the error message, you can see that TypeScript is saying that this is probably
a mistake, but if you still want to do something like this, then add an additional assertion to unknown.
And if we do this process of first asserting to unknown and then asserting to point 3D.
Indeed, TypeScript trusts us and does not check us with any errors.
Now, from our lesson on Unknown, we can understand why this is working.
Unknown is allowed at least one way compatibility with all types that is a variable of all types can
be assigned to a variable of type.
Unknown, so anything can be assigned to unknown.
For example, a person and an unknown can be asserted as anything.
For example, a point 3D.
So that is how a double assertion works.
And it goes without saying use it with caution and avoid it as much as possible, but it might help
you migrate some JavaScript code.
