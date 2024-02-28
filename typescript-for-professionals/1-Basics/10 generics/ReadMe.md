Here we have a simple JavaScript class that implements a first in, first out collection, which is
also known as a queue.
It provides two methods push to push items into the queue and pop to pop items out of the queue.
In a first in, first out manner.
Now this is a general purpose queue and it supports items of any type.
So we can push in a number and we can push in a string.
However, because it supports items of any type, when we pop out items from the queue, we do not get
any guarantee about what the type of that item will be at compile time.
So developers assumption of what a pop out item might be.
For example, in the second call, based on the to precision call, it seems that the developer is expecting
a number.
However, since the type of the items in the queue was not constrained, we were allowed to push in
a string and this particular call will result in a runtime error.
Now, in a language that does not support generics, we can overcome this issue by using class specialization.
So what we do is that we extend the base class with a class specially designed for a particular item
type where we annotate the push and the pop items with that item type.
And within the method bodies, we simply call the superclass methods which support all data types.
Now when we expect to be working with numbers instead of using the base class, we create instances
of this number queue and this highlights errors when we try to push in something that is not a number.
And therefore when we pop an item, we can be guaranteed that it will be of type number.
Now, creating these class specializations specifically for the purpose of data type annotation can
quickly become cumbersome.
For example, if we needed a queue of strings at this point, we would have to duplicate this code only
to change the annotations from number to string.
Fortunately, TypeScript does support generics and so we don't need to create these specialization classes.
So let's get rid of this number, queue class and go back to our original example.
We can add a generic type parameter as an argument to the queue class, and then we can use this type
to annotate our push and pop functions.
Now, when we create instances of the queue class, we can pass in the generic type argument.
For example, if we want a queue of numbers, we pass in the type number because we've annotated the
push method to only accept items of type T when we are passing in the generic argument number.
This ensures that the instance will only accept items of type number for the push call, so we get an
error when we try to push a string and we can easily fix it.
And now our two precision call will work because we are only pushing numbers.
So to summarize, generics allow you to add type arguments that can be used to enforce a relationship
between different members of a piece of code.
Here we are using a generic argument in the queue class and storing it in type T.
We use this to ensure that only items of type T are accepted by the push method and subsequently returned
from the pop method.
