Let's create two TypeScript types, a type user with a member ID of type string and a type product with
a member of ID of type string.
When we have two variables one a user and another a product.
Now the structure for the user and the product type is exactly the same.
That is, they both have a member ID of type string.
TypeScript type system is structural.
It does not care about the names of the types.
What this means is that the user and the product has the same type compatibility.
This means that you can assign a user to a product or a product to the user because they have the same
structure.
Now let's look at another example.
Here we have two types a type for a point in two dimensional space with the members X and Y and a type
for a point in three dimensional space with the same members as well as an additional member Z of type
number.
Next, we create two variables one of type point 2D and one of type point 3D.
An additional feature of the TypeScript structural type system is that extra information is okay.
What this means is that we can assign a point 3D to a point 2D because a point 3D does have the members
that are required by point 2D, which is X and Y.
Now, such an assignment can also happen indirectly.
For example, here we have a function that expects to be passed in a point 2D as an argument.
Now, because the point 3D contains all the information that is required by a point 2D, we can actually
invoke this function with the point 3D without any compile time errors.
Now this is also called duck typing.
That is, if it walks like a duck and quacks like a duck, then it must be a duck and a point.
3D is all the walking talking features of a point 2D.
Now a point 2D, on the other hand, does not have all the features that are required by a point 3D.
Specifically, it is missing the property z of type number.
Therefore, if we try to assign a point 2D to a point 3D, TypeScript will raise a compile time error.
And similarly, if there is a function that expects a point 3D and we try to pass in a point 2D, we
will get a compile time error from TypeScript.
