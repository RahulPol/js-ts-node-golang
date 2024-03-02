Here we have a type ad representing a function that can be invoked with two parameters each of type
number and then returns a number result.
We can use this type in any type annotation position.
For example, here we are declaring a variable to be of this type.
Now this shorthand syntax for declaring the type of a function can be used inline or as we have done
in this case, assign to a type alias.
Another way of declaring the type of a function is by using call signatures in a body block.
So we paste what we have in the shorthand syntax, and the only modification we need to make is replace
the arrow with the colon, similar to how you would annotate the return type of a function.
As far as TypeScript is concerned, this type is exactly the same as what we had in the shorthand syntax.
This body block syntax is also what you would use to declare the type of a function if you wanted to
use an interface instead of a type alias.
Of course, these are both equivalent other than the fact that an interface is open for declaration
merging.
Let's swap back to a type alias.
Now using a body block means that you can also add other members.
For example, an optional debug name property to the type Add.
And now this property is available for access on our variable.
Another feature available in this long form is the ability to declare function overloads.
Here we are saying that the Add function can also be invoked with three parameters and now we update
our implementation to accept the third optional parameter as well as use it if it is provided.
In addition to simple functions, TypeScript also supports providing the type annotation for a function
that is invoked with the new operator, also known as JavaScript classes.
Let's look at an example.
Here we have a class called Point with two members X and Y of type number.
Now classes in JavaScript are an expression that can be assigned to any variable.
For example, a variable called point.
Now we can declare the type of such a variable by using the familiar syntax from call signature.
The difference is we precede the call with new and for the return type annotation, we provide the list
of members that will exist on instances of the class.
And now we can use this type annotation for our point variable.
Now, just like for functions, this constructor signature is the short form.
There is an equivalent long form syntax as well, so within our parentheses we paste in the same short
form and the only thing we need to change is change the arrow to the return type annotation, just like
we did for simple call signatures.
As a final note, let's combine everything we have learned into a single type annotation.
Here we have a type with multiple constructor overloads as well as function overloads, as well as a
property called debug name.
And although you are very unlikely to create a type like this, at least you can appreciate the types.
And TypeScript are extremely expressive.
