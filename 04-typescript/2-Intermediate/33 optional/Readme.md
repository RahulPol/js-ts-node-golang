Here we have a type representing a person with the members name and email, both of type string.
Now these members of the type are considered required members in addition to required members, we can
add an optional member with a question mark modifier.
Here we've added an additional optional phone member to the person type.
Now we can create an instance of the person type with all three members, or we can even create a person
object with just the two required members leaving out the optional phone member.
Now in JavaScript, if you try to access a property that hasn't been provided, the JavaScript runtime
will return the special value undefined.
TypeScript understands that and will automatically mark all optional members to also include the undefined
type.
Now with optional members, we can leave them out as we have done for the Alfred object over here,
or we can provide a member with a correct type.
For example, provide a string for the phone as we previously did for the Bruce object as well.
Or we can even provide an explicit undefined value.
It is still type checked.
So anything other than the correct type.
For example, providing a number when a string was annotated will result in a compile time error.
Now, TypeScript also supports optional members on classes.
Let's look at them with another example.
Here we have a class with required members X and Y of type number.
Now, because we haven't provided any default value for these x and Y members of type number, nor have
we initialized them in the class constructor.
TypeScript is going to highlight this as a compiler error.
Now we can fix that by initializing these values in the class constructor or we can provide an initializer
inline.
Alternatively, now that we understand optional members, we can remove the initializer and simply mark
these members as being optional.
Now, because these members are optional, we can create an instance of the point class and not provide
any initial values to the X and Y members.
And if we try to read these members, the JavaScript runtime will return us the special value undefined.
Once more, TypeScript understands that and automatically adds undefined to the number of possible values
for optional members.
This means that we can assign it the correct type, which in our case is number, or we can even assign
it the special value undefined.
Now one final thing worth mentioning for optional members types or classes is that Null is not considered
an optional value.
So if we try to assign Null to a particular member, it will result in a compile time error.
If you want to support Null as a possible value for any of the members of your types of classes, you
will have to add that as an explicit annotation, for example using a union type.
