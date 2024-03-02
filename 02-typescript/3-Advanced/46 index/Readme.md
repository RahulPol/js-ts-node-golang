Here we have a JavaScript object with a single member.
Hello.
You can access members of a JavaScript object using a string index.
Similarly, here we have an object with a single member 1337.
We can access this member using a number index similar to how you would do it in a JavaScript array.
TypeScript allows you to access members of a JavaScript object using arbitrary string or number indexes
by declaring an index signature.
Here we are declaring a type whose instances you will be able to access using a key of type string and
the members will be booleans.
The type for the key can only be a string or a number, as those are the only ones that are safely supported
by JavaScript.
You are free to name the index member whatever you want.
It is only used for developer documentation.
Here we simply use the name key and in terms of values you can put whatever you want.
Here we simply use the type boolean.
Now let's look at an example application of an index signature.
Here we have a type representing a person with members, display name and email.
We can declare a type for a key value pair of username two persons Using an index signature.
We can create an instance of this dictionary as a simple JavaScript object.
Here we've pre-initialized it with a single key called Jane and a corresponding person object.
We can also assign to any given key afterwards.
For example, here we are assigning a person to the key John.
We can also read the value at any given key using a JavaScript string indexer.
Additionally, we can use the JavaScript delete operator to delete the value at any given string index.
You are allowed to mix index signatures with other well defined members.
For example, here we are saying that the person dictionary must always have a member Jane of type person.
So if we try to create a person dictionary without this member, TypeScript will give us a compile time
error.
And if we get rid of this required member, the error will go away.
Also, all additional members of a type with an indexer must conform to the index signature.
For example, if we try to create a member Alfred of type boolean.
TypeScript will complain that boolean is not assignable to the index signature, which is person.
So we can either change it to be of type person or just get rid of this member.
Now you can always access this person dictionary with any given key.
However, if the key value is not present, the JavaScript runtime will return us the special value
undefined and accessing something like an email of an undefined will result in a runtime error.
However, notice that TypeScript is not catching this right now.
If you want TypeScript to catch these mistakes, you can add a union of undefined to the values returned
by the index signature.
And now TypeScript correctly highlights a potential error with a familiar message object as possibly
undefined.
Now, one more thing worth mentioning is that when we are assigning by a given string index, TypeScript
is still going to provide us with type safety to ensure that it is actually a person.
For example, here we made a typo in the email member and TypeScript has figured this out and provides
a suggestion for the correct spelling of email.
