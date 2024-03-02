Here we have a type declaring a point in two dimensional space with the members X and Y of type number.
We create a const variable declaration for this point with the members X and y both pointing to the
value zero Using a const declaration ensures that we cannot assign a different value to this variable.
However, in JavaScript, a const declaration does not prevent us from assigning different values to
the members of the variable.
Fortunately, TypeScript gives you the opportunity to add a read only modifier to different members
of a type.
So if we make X as read only, we can no longer assign to this property after the declaration.
And of course we can do the same for the Y member to make that as read only.
And of course, marking a property as read only gives you access to read the property.
You just cannot reassign it.
The read only modifier in TypeScript is a compile time only feature used for error checking and does
not require any runtime JavaScript support.
That's it for types.
Now let's look at JavaScript classes.
Here we have a simple JavaScript class called Animal with the member name that can be initialized using
the constructor.
We create an instance of this class passing in the name sheep.
Now at this point we can read the name member as well as modify it.
For example, put a wolf in sheep's clothing.
Now, if you want to disallow the assignment of the name property after the constructor, we can use
the same read only modifier before the property name.
And now if we try to write to the name property after the constructor, we get a compile time error
from TypeScript.
Now, just like other class access modifiers, public, private and protected, the read only modifier
in TypeScript is a compile time only feature used for compile time error checking and does not require
runtime JavaScript support.
Now one final thing worth mentioning is that we can combine read only with other class member access
modifiers for example public.
