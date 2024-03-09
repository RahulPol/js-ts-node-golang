This is the basilar function that we previously saw in our lesson on union types.
Now, the pairing parameter for this function can be a string or a number allowing us to pair with a
number of spaces or any given string.
Now within the function body, we are using the JavaScript typeof operator to determine if the padding
is a number or a string.
Outside of these conditional blocks, the pairing parameter can be a number or a string.
Now, within these conditional blocks, TypeScript understands that if this condition is true, then
within the condition body, the pairing parameter must be a number.
And if you hover over the padding parameter, you can see that it is inferred to be a number within
this block.
The same is true for the other block.
If the type of padding is a string, then within the conditional block, the padding parameter will
be narrowed down to the string type.
Now the JavaScript typeof operator is one of the ways in which you can narrow down a union type into
one of its primitive members.
Now this is perfectly fine.
If the union type that you are looking at consists of primitive members like number or string.
For anything else that is not a JavaScript primitive type, the type of operator actually returns the
string object and therefore cannot be used to discriminate between the members.
Now let's look at how we can narrow between instances of different JavaScript classes with an example.
Here we have a simple JavaScript class called Cat with a single method called Meow.
We also have another JavaScript class called Dog with a single method called Bark.
We can capture instances of a cat or a dog in a single type union called Animal.
Now we want to create this utility method called speak, which can accept any animal, and if it is
a cat, it should meow.
And if it is a dog, it should bark.
Now, as mentioned before, we cannot use the type of operator because it will be the string object
for instances of either a cat or a dog.
Now, the proper way to determine if a given object is an instance of a class is using the JavaScript
instance of operator.
So we check if the passed in animal is an instance of a cat and if so, we invoke the method meow.
Otherwise, if it is an instance of a dog, we invoke the method bark.
Now, just like the type of operator, TypeScript understands the instance of operator and understands
that if this condition is true, then within the condition body animal will be a cat.
And similarly, if the second condition is true, then the animal will be a dog.
Now that's it for classes.
But what about objects that are not created by calling a constructor of a particular class?
Let's discuss those with another example.
Here we have a type representing a square with a single member called size to represent the square's
width as well as its height.
Then we have this type called rectangle with separate members to represent the rectangle's width and
height.
Now we can capture instances of a square or a rectangle in a single type union called shape.
This allows us to create a utility function called area that can operate on any given shape.
So if we pass in a square with a single size value of two, it should return the area four.
And if you pass in a rectangle with a width of two and a height of three, it should return the area
of the rectangle, which would be six.
Now, as you mentioned before, the type of operator for both of these objects would be the string object
and would not help us differentiate between a square and a rectangle.
Additionally, since these instances are not created by classes, we cannot use the JavaScript instance
of operator to differentiate between the two objects.
Fortunately, we can use the JavaScript in operator to determine if a particular property exists on
the pattern object and TypeScript will automatically infer that if this property is present on the object,
then it must be of that particular type.
So if the size property is found on the shape and this condition turns out to be true, TypeScript infers
that shape must be a square.
Similarly, if the width property is found on the passed in shape, TypeScript infers that shape must
be a rectangle and will allow us to use the width and the height property with complete compile time
type safety.
