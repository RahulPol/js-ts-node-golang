Here we have a generic function that takes an object of type T and then returns the same object.
At this point, this function is a simple identity function.
We can modify this function to return a shallow clone of the person object.
Here we are returning a new object and using the JavaScript spread operator to spread all the members
of OBJ into the new one.
In addition to returning all the members from OBJ, we can add an additional member called FullName
of Type String.
So we add that to the return type annotation and then provide a default value for the full name member
in the return object.
Now the purpose of the Add fullname function is actually to generate a full name property by using the
OBJ first name and the obj last name.
At this point, TypeScript is complaining that it does not know what is intended by OBJ firstname and
object.
Last name as these members are not declared anywhere.
In order to access these members from the object of type T, we have to declare that the past in OBJ
must conform to a particular structure and that is done by using a generic constraint.
Here we are saying that type T must have all the members that are present in the type name fields.
Of course we could declare this type inline, but let's just create a type alias to keep our code a
bit clean.
Now, with this generic constraint in place, TypeScript will ensure that the object of type T has the
members first name and last name of type string.
Now let's demonstrate a usage of this function.
So we invoke this function with an object that has a member email, a first name and a last name.
All of type string.
Now, because of the function signature where it takes a T and returns a T, we are able to access any
of the members of the originally passed in object, for example, the email field.
In addition, in our return type annotation, we say that the return object will get this property full
name of type string and indeed we can access that on the returned John object.
Now the generic constraint extends name fields is allowing us to access the first name and the last
name property within the function body.
Additionally, it is enforcing that the passed in object should have these members first name and last
name of type string.
Let's look at an example where we fail to provide these members which are being enforced by the generic
constraint.
TypeScript immediately reports this as an error, and if you look at the error message, it is telling
you that the last name property is missing in this object that is being passed into Add full name.
Armed with this information, we can provide the last name for Jane, which in our case is Austin.
And now the error goes away because everything is fine.
