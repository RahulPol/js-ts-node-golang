Modern JavaScript allows you to create a variable as a const declaration.
Of course we can use type annotations with const declarations.
For example, here we have a type point with members X and Y and we can annotate this point variable
to be of type point.
This ensures that any mistakes we make during the initialization of the variable are caught at compile
time.
For example, a typo in the x property.
Now the key difference between a const declaration and a let declaration in JavaScript is that you cannot
reassign a variable that has been declared with const.
For example, if we try to reassign with the equals operator a new object to the point variable, we
get a compile time error from TypeScript.
Of course, this is because reassigning to a const would blow up at runtime in JavaScript.
Beyond this reassign ability protection, there are no other guarantees offered by a JavaScript const
declaration, for example.
We can still go ahead and modify the properties of an object.
TypeScript understands this JavaScript behavior and will allow you to do the same in your TypeScript
code.
