Here we have a type representing a point in two dimensional space with members X and Y of type number.
Now within our library, we also want to express points in three dimensional space and we have the members
X, Y, and Z of type number.
Notice the duplication between the members X and Y of point 2D and point 3D within the same code base.
Now you might be familiar with the concept of class inheritance.
Intersection types behave in a similar way and allow you to combine the features of any two given types.
So we can remove the duplication of the X and Y members in the .33 type and simply use a type intersection
with the point 2D by using the ampersand operator.
Here we are saying that Point 3D has all the members of point 2D and the member Z of type number.
Now of course we can chain multiple types with multiple ampersand signs and additionally we can use
intersection types in line.
Let's look at another example.
Here we have three types a type person with a member name of type string, a type email with a member,
email of type string and a type phone with a member phone of type string.
We have this utility function that uses the name, the email and the phone to contact an individual.
Now we can enforce that.
The contact function is called with all the correct details by using an intersection type, combining
the members of person, email and phone.
And now we get to invoke the contact function with complete compile time type safety.
And if there are any type errors, for example, a missing member, we get a nice compiler error from
TypeScript.
Now, one final thing worth mentioning is just like type unions, we can extract an intersection type
into a type alias.
And we previously saw this usage in point three as well.
Similarly, we can add a leading ampersand before a type intersection and it has no impact on the semantics
of the type and is there purely for readability purposes.
