A common use of literal types in TypeScript is to have a union of types which have a single shared field.
This single shared field can be used to discriminate between the members of a union.
Let's discuss this with an example.
Here we have two types a square and a rectangle, and then a union of the two types that allows us to
work with either a square or a rectangle with simple utility functions.
Now, in our area utility function, we are currently using property checks to determine if a particular
shape is a square or a rectangle.
If it has a member size, then it is a square.
If it has a member width, then it is a rectangle.
Now, using these property existence checks, for example, checking if a shape has a member width does
not intuitively tell us that we are checking if the shape is a rectangle.
This is where a discriminated union comes in.
We can add a property with the same name to all of the types in the union, but with different literal
values.
For example, we can add the property kind both to a square with a literal value square and then to
a rectangle with the literal value rectangle.
And now, because all of the members of the shape have this property, we can access it off of any given
shape.
Additionally, when we try to access the property, TypeScript figures out that the only literal values
that kind can be is either a square or a rectangle and will even provide nice autocomplete.
And now if the kind is indeed a square, then TypeScript knows that a shape with a member size has been
passed in.
Similarly, if the shape kind is a rectangle, then shape must be a rectangle with the members width
and height.
Discriminated unions are also easier to maintain when we need to add additional members.
For example, if we decide to support the circle shape as well, we simply add the type circle with
the member kind pointing to the literal circle.
Then we add it to our shape union.
And if we ever want to operate on a circle, we simply check that the kind member is pointing to the
literal circle.
Now you are free to call the discriminating member whatever you want.
And in addition to string literals, as we have done over here, you can also use other literal types
like a Boolean or a numeric literal.
Let's demonstrate that with another example.
Here we have a type representing a validation success, and then another type representing a validation
failure, and then a type validation result, which can either be a validation success or a validation
failure.
Now, both the success and the failure types have the same named member called is valid.
The only difference is that in a validation, success is valid is pointed to the literal true and in
a validation failure, the is valid member is annotated to be the literal value false.
Now using a discriminated union for validation results as well as for network requests that might return
a success or a failure is actually a great idea.
For example, in this particular case, we will not be able to read the validation value unless we ensure
that is valid is true.
Now let's consider a utility function log result which wants to log out any form of validation results
within the function.
We can simply check if result Dot is valid is true, and if so, we know that it is a validated value
and we can log that out.
Otherwise, if is valid is false, then it must be a failure and we can log out the error reason.
