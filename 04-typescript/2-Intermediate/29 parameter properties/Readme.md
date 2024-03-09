Let's start off with the simple TypeScript class that represents a person object.
Now this class has two properties name and age.
Then we have a constructor with parameters, name and age, and we use these parameters to initialize
the class properties.
Now, to demonstrate these properties, we create a person called Adam to represent the first human
to ever exist and then log out Adam's name and age.
Notice that there is duplication between the declaration of the properties and the constructor parameters.
TypeScript allows us to get rid of this duplication by using parameter properties, so we get rid of
the property declaration and we get rid of the property initialization and then within our parameters
we can actually declare them as properties by using the modifiers public, private, protected or read
only.
This takes these class parameters and declares properties for them and then also initializes them with
the values that are passed in when creating class instances.
