Let's talk about JavaScript classes.
Here we have a class animal with the property.
Name a constructor function that is used to create instances of this class and a method called move
that takes a distance in meters and logs out something to the console.
We create a variable to store an instance of this class and then we can call methods on this instance.
Now, TypeScript already understands all the information that is present in the code right now, but
additionally it allows us to annotate any of the properties, the parameters of the constructor, as
well as the parameters of the methods as well as the return type.
TypeScript also allows fine grained access, control of the properties and methods of the class.
Now, by default, all properties and methods are public, which is the standard for JavaScript.
However, we can be explicit about this access by using the public keyword before any of the properties
or methods.
Now there might be some class members that we do not want to be accessible outside of the class body.
For example, we might not want the name property to be accessible outside.
In order to limit the access of a member only within the class body, we can use the TypeScript keyword
called private.
And now any access outside the class body results in a compile time error.
Now JavaScript also supports class inheritance so we can create a class called Bird that extends animal
and has an additional method called fly.
Now, as mentioned, private members are only accessible in the class body, so we get a compile time
error when we try to use the name property in the child class.
TypeScript provides another access modifier called Protected, which still keeps the member inaccessible
on instances, however, makes it accessible within the class hierarchy.
So we can access this name property from the child bird class.
