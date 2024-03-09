Here we have a const variable called King that is storing the string Elvis.
Now we know that const in JavaScript ensures that we cannot assign a different value to the king variable.
An additional fact about JavaScript is that strings are immutable.
That is none of the methods on the string Primitive type allow you to mutate the string value.
TypeScript understands this fact and automatically infers the type of the king variable to be the literal
Elvis.
However, objects and arrays in JavaScript are not immutable.
Here we have an objective with two members name and role of type string and a member skills of type
array.
Declaring the variable as a const ensures that we cannot assign a different value to the de variable.
However, the object itself is still mutable, so we can assign different values to the different members.
For example Dave Dot name or Dave dot role and even modify arrays by its methods.
For example.
Dave Dot skills dot Unshift.
Once more TypeScript understands this fact and automatically infers the name and roles to be of type
string so you can assign any string to them and the skills member to be a string array.
Now of course, from what we know before, we can create a type specific to the Dave variable where
we have these members, but they are all marked as read only.
However, there is another way you can achieve this effect without creating a type specific to this
variable and that is using a const assertion.
Const assertions can be used on any value using as const const.
Assertions are essentially hints to the type inference that you want it to infer the most immutable
type possible.
A const assertion does three things.
It converts any primitives to the literal types.
Any members of an object to read only members and any arrays to read only tuples.
And now any mutations to the object will be highlighted as an error by TypeScript.
In addition to providing immutability for objects, const assertions are also commonly required when
you are working with objects that have literal members.
Let's look at an example.
Here we have a function called layout that expects an object with two members, a member, a line which
is restricted to a limited set of literal types and a member padding of type number.
We create an example variable of such an object and then we invoke the layout function with this example.
And even though the example variable follows the required structure, we get an error from TypeScript.
If you hover over the error message, you can see that TypeScript is complaining that string does not
conform to the literal types that are required by the align member.
The reason for this error is that for the object example, TypeScript has inferred the align member
to be of type string.
This is consistent with what we saw in our previous Dave sample.
We could fix it with an explicit type annotation for the example variable or as we saw before, use
a const assertion.
With this assertion in place, the align member is inferred to be the literal type left and the error
goes away.
Notice that all the members of the object have become read only and padding is also inferred to be the
literal type.
Zero.
As mentioned before, the const assertion can be applied on any value and we can be more specific where
we want to apply the const assertion since we only need the align member to be inferred as the literal
type and we don't want to change the other members to the literal types or read only properties, we
can apply the assertion just to the left string and now only the align member is inferred to be the
literal left and all other members remain untouched.
So when you are using a const assertion to fix an error, it is always recommended that you apply it
at the most specific point possible.
Now, unlike other assertions which essentially silence unsafe code cons, assertions are just hints
that increase type safety by limiting the mutability so you can use them without worrying about your
type checking becoming unsafe.
