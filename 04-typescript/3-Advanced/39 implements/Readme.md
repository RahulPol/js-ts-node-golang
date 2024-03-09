We have a type representing animals with a property name and a method voice.
Now we can create utility functions that work on top of animals.
For example, here we have a log function that logs out the animal's name and voice.
Now we want to be able to use these utility functions on instances of classes, cat and dog.
Now, TypeScript can help ensure that cat and dog provide all the features required by an animal by
using an implements keyword.
So we specify that class cat implements animal.
And as soon as we do that, we get an error from TypeScript.
The error message tells us that at this point, Cat is missing the following members required by animal.
It is missing a name and a voice.
Adding and implements animal annotation is helping us ensure that we provide all the features that are
required by an animal type, and now we can provide the features that are highlighted.
For example, create a name parameter property and then provide the voice method.
And now we can repeat the same process for the dog class.
Adding implements animal noticing the error message, and then providing the members that are highlighted
by the error message.
And now, since no errors are being highlighted by implements animal, we can rest assured that instances
of cat and dog can be used at any place where an animal is required.
