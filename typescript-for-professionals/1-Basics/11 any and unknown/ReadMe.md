In this lesson, we will look at the any and the unknown types in TypeScript to understand the behavior
of these types.
We start by creating variables one annotated as any, and a second one annotated as unknown.
Both any and unknown are universal super types In TypeScript.
This means that all types of variables can be assigned to something that is any, and the same is true
for unknown.
And that is where the similarity ends.
Let's first take a closer look at any any is like an escape hatch in the type system.
It gives you complete freedom to do anything you want to do with the variable without having to worry
about TypeScript adding its type checks into the mix.
For example, you can access anything you want from it, and any member access is further inferred to
be any.
So you can build up any ridiculous chain that you can imagine.
Similarly, you can even assign it to well defined types like Boolean without having to ensure that
the value currently held by the any variable is actually a boolean.
Essentially, the any type exists to allow you to completely bypass the TypeScript type system and you
can use it to overcome pesky type errors.
If you are in a rush and trust the code works.
Unknown is different and safer.
You can still accept anything into an unknown, but you cannot just use it in an unsafe manner.
For example, you cannot willy nilly access any properties on it and you cannot assign it to well-defined
types like Boolean without further checks.
All attempts to do so will result in a compile time error and that is the main value proposition of
the unknown type.
If you want to use it as a string, you have to check that its current value is going to be a string.
And if you want to use it as a boolean, you have to check that it is going to be a boolean.
So unknown can be thought of as a more type safe version of any.
It still allows free access to all types within the type system, but does so in a safe manner.
