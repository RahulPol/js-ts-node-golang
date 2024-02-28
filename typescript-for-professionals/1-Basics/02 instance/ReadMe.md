Now JavaScript, despite being a functional programming language at its core, does support classes
and there are a number of built in classes for JavaScript runtimes out there.
One of them is the class for regular expressions.
Another built in class that is used quite heavily within JavaScript code is the class for an array.
Now, because arrays are something that you will use quite heavily, JavaScript provides special syntax
to create JavaScript arrays.
Now modern JavaScript runtimes also come with additional collection classes and one of them is the set
class which is used for a unique set of items.
We can initialize a set with a JavaScript array and internally it will remove any duplicates that are
found within that array.
Now we can annotate instances of these classes simply by using the class name.
Now for classes like Array that support generics and don't worry, generics are something that we will
look at in another lesson you will also have to pass in the generic argument.
Since we have an array of numbers over here, we will use the annotation array of type number.
Similarly, we have a set of numbers over here, so the annotation for that will be a set of type number.
Now, in addition to these and other built in JavaScript classes, you can actually create a class in
JavaScript yourself as well.
Here we have a generic class for a queue, which is a first in, first out collection.
Now we will have a separate lesson on JavaScript classes as well.
So the details of this class are not that important.
Now, just like the built in JavaScript classes like array and set, we can use the user created class
in a type annotation.
Here we have a variable queue which is annotated to be a queue of type number.
