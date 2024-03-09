Here we have a type representing a person with members name and location of type, string and age of
type number.
We have an example of such a person in the form of John, aged 35, living in Melbourne.
We have a utility function that lets us access any member of John along with logging out a statement
to the console.
As an example, we can use this method to get John's age.
Now, an issue with the signature of our log get function is that it allows any old string key to be
passed in.
For example, we can pass in a key that is not present on the John object like email.
Now we can improve the situation by replacing our open ended string with a limited set of string literals
using a string literal union.
For example, we can say that key must be name, age or location, which are the only valid keys for
the person type.
And now TypeScript correctly highlights invalid access as an error.
However, this list of keys is essentially code duplication that will have to be maintained as we continue
to work on the person type.
Fortunately, this is something that can be automated with the TypeScript key of type operator.
The key of type operator takes a type as input and returns a union of the keys from that type.
And this is exactly the union of the strings that we wanted.
So we can replace our Hand-coded Union of String literals with a simple key of query on the person type.
And because we are restricting the keys to be from the person type, we'll annotate the object to be
of type person as well.
Now notice there are logcat function, doesn't have any code specific to the person type.
To make this function more general, we can use generics using a generic type for the OBJ and a generic
type for the key.
And now the requirement that key must be something that is in the key of OBJ can be enforced by a generic
constraint when we define the generic argument.
Now, with this generic constraint, TypeScript knows that key will be something that is in the key
of OBJ.
So when we try to index obj with key in our JavaScript code, TypeScript correctly infers the type of
the returned value to be an index lookup type object key and since value is what we return from the
logcat function, the return type of the function is also inferred to be the lookup type OBJ a key.
Now with this function signature in place when OBJ is of type person and key is of type age, the return
type will be the lookup person age and we can see that it needs to be a number.
And indeed that is what is automatically inferred when we try to use log get to get John's age and now
we can get rid of the invalid access for the email property.
Now similar to how we have the log get function, we can easily apply the same knowledge to build a
log set function.
The body of the function is pretty simple in terms of the function signature.
It is very similar to the signature of the log get function.
The only difference is that the log set function takes an additional third argument, which has been
annotated with a lookup type object key.
And we've seen this type before as well.
This is exactly the return type of the log get function.
And now we get a nice utility function that can be used to set any value on a member of any type.
And if you make any silly mistakes, for example, misspell a property or provide an invalid type for
that particular property, we get a nice compiler error from TypeScript.
Now the key of operator by itself is quite simple.
It simply returns the union of strings, of keys, of any given type.
Here we've combined the key of operator with other features in TypeScript, which are generics, generic
constraints as well as with lookup types to provide type safety for something that can be used to observe
any given object.
