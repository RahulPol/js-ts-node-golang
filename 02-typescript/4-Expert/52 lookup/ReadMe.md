I once worked on an application with the back end, needed a bunch of information specified by a type
called submit request similar to what is shown over here.
Then different portions of the UI would collect portions of this request and send it back to the back
end.
For example, a portion of the UI was dedicated to the purpose of collecting the credit card token.
Now, in order to ensure consistency between the return type of the get payment method and the payment
portion of the submit request, we could extract that portion out into its own name type, for example,
payment request, and then export that from the common library and then use it in our application.
But this leads to two problems.
First, we need to start asking the back end team to make modifications to their type definitions.
And additionally, we will probably start asking that for other portions of the submit request as well.
A second issue with this approach is that now for someone looking at just a submit request, they would
see various members pointing to different types and it would not be immediately clear to them why these
types need to be split out.
These additional types are essentially type noise in the common library.
The solution to both of these problems is provided by TypeScript lookup types so we get rid of the return
type annotation, get rid of this extra type within our common library and then revert submit request
to all be in line.
Now using typescript's lookup types, we can look up the type of the payment member from submit request
on the fly.
The syntax for looking up the type of a particular member is similar to the syntax of looking up a member
from a JavaScript object.
Here we are saying that the return type of the get payment method should be the same as the type of
the payment member of submit request.
This return type annotation ensures that we return the correct type and if you make any silly typos,
for example, add an extra s, you can see that TypeScript points it out as a mistake.
Now we have used this lookup type in line, but if you find yourself using the same type again and again,
you are still free to create a type alias using a lookup type.
This is still better than our previous solution because a submit request is still one cohesive type.
And additionally, this particular utility type can live in our project and not in the common library.
Now lookup types can also be used to look up the type of the items in an array within our type submit
request.
We have a member personal that has a member previous aliases, which is an array of items as indicated
by these square brackets.
So a previous alias is something that has three members first name, middle name and last name.
Let's see how we can get that type.
So we jump back to the UI portion of our code.
And the first thing that we will do is that from submit request, we look up the member personal and
then from the type submit request personal, we look up the member previous aliases as we saw before.
This particular member is an array.
So to get the type of the items in the array, all we need to do is to look up the first item by using
an index zero.
And now our previous alias request is exactly what we wanted.
That is a type with three members first name, middle name and last name.
