TypeScript interfaces support a feature called declaration merging.
An example use case of that would be something like the NodeJS framework called Express.
The base request type, supported by Express, has a few properties, for example, the body property.
Now, within our application code, when we handle an express request, we will have access to any of
the properties that are declared on the request type.
For example, we have access to this body property.
Now declaration merging allows a middleware, for example, a Json middleware to add additional properties
to the request interface.
TypeScript is going to merge the two declarations of the interface into a single type that has both
of these properties.
So in our code, simply by importing the Json middleware, you will get access to the Json property
on instances of the request interface.
Declaration.
Merging is not something that is supported by type aliases.
So if you are working with an API that requires such seamless structural extension, you will have to
use an interface.
