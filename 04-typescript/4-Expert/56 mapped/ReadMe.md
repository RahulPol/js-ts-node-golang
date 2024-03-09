Here we have a type called point with three members X, Y, and Z of type number.
We will have lots of points in our application.
And one such point is the special variable called center.
The reason why center is a bit special is because we want this to be immutable.
We don't want anybody changing its X, Y, or Z values.
So if anyone tries to assign some value to center dot x, we want this to be a compiler error.
Now we can achieve that quite easily by creating this type called read only point, which has the same
members as point, except that all of those members are marked as read only, and then use this type
specifically for the center variable.
And now we get a nice error if anybody tries to assign to these members, for example, the x member.
However, notice the code duplication between point and read only point.
We can get rid of this duplication by using mapped types.
A map type consists of three key portions a loop variable, a union of types that we are going to loop
over and an output type.
In our case we can loop over the union of Keys, X, y, and Z.
And for the output, we know that all of these members need to be of type number, so we use the type
number.
We don't have the need for a loop variable yet, so we leave it as it is.
And with that you've successfully created your first mapped type.
Now, right now, this read only point is exactly the same as the type point.
The great thing about map types is that you can add modifiers that will apply to all the loop items.
So if you apply the modifier, read only all of these members become read only, which is the type that
we want to generate.
Now let's apply other features from TypeScript to clean this code up a bit more.
Instead of hand-coding this union of strings, we can generate it by applying the key of operator to
the point type.
Additionally, instead of assuming that all of these members need to be of type number, we can read
the type of the individual members by using the loop variable to look up the type of the member from
point.
As a final step, we can create a utility type function by taking a generic argument of type T and using
that instead of the hard coded point type.
And now we can use it to create read only versions of any input type.
And for our particular case, our input type will be the type point.
And at this juncture, I'm actually happy to inform you that you don't need to create this particular
read only utility type.
It comes baked in as a part of the TypeScript compiler, and if we delete our custom implementation,
it falls back to that one.
And the internal implementation has been coded up exactly how we did it right now.
Now, with this annotation in place, TypeScript correctly points out any invalid usages of center and
we can go ahead and fix those.
