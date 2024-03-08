Here we have a variable called center with members X and Y initialized to zero representing the center
of a two dimensional plane.
Later on in our code base, we create a unit variable based off of the center, offset by one in X and
Y.
Our application is complete and we deploy to production.
Then we decide that we want to support three dimensions and add the members to our center variable.
At this point, we realize that our code would be much more maintainable if we had types in our code
base.
Now we can create a type for points in our code base and specify that they need to have three members
X, Y, and Z.
However, realize that TypeScript already knows the type of center from its initializer, and it understands
that it has three members X, Y, and Z of type number.
This is exactly the same as the type we just hand-coded.
Well, fortunately, TypeScript provides the type of type operator to generate a type from any variable
in your code base.
This type will be the same as whatever TypeScript inferred for the center variable.
In our case, this is exactly what we wanted and you can see that by hovering over the type alias.
So now we get to use this type without ever having to code it by hand.
Of course, if it was a bigger variable, it would be a bigger time saving.
And now you can see that TypeScript is complaining that member is missing for the unit variable.
So we go ahead and provide that.
Now, even though we use the type of operator to create a type alias, you can use this inline as well
if you wanted to.
Now let's look at another use case of the TypeScript type of operator.
Here we have a sample Json response that we saved from a network call.
Of course Json is valid JavaScript so we can jump into our TypeScript source code, create a variable
to store this response and then paste that in.
And now instead of having to hand code the type of the response, we can let TypeScript infer that from
this variable and even create a type alias from it.
And now we can use this type in our code base.
Whenever we get an API response, we simply annotate it as person response and use its various members.
For example, here we are logging out the full name as the first name plus last name.
