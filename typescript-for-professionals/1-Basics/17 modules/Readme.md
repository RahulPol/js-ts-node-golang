Here we have a JavaScript function that determines if a particular string is a palindrome or not.
Then we use this function with two examples.
First, Madame, which is a palindrome because it reads the same forwards and backwards.
And then another example that is not a palindrome.
It's great that we can use this function within this file, but what's even better is if we could use
this general purpose utility in other files in our code base.
The solution to this task is provided by JavaScript modules which are also supported first class by
TypeScript.
As an example, let's go ahead and export this function from this file using the export JavaScript keyword
that makes this function Importable by other files within our code base.
As an example, let's jump to another file in the same folder.
Now the first step is to import the module into this file.
The general syntax for importing modules is import followed by the kind of import followed by the keyword
from followed by the path to the module.
In our case, the module is located in the same folder in a file utils so we can use the relative path
dot slash utils.
Now TypeScript understands everything that is exported from this module and will provide you with nice
autocomplete and error checking in case of any mistakes for our use case, we simply import the function
is palindrome and now we can cut the usages of the function from utilities and then paste them into
index.ts.
And because of that import they will now work as if this function was locally defined within this file.
As a final note, all of the syntax of JavaScript modules is supported by TypeScript.
For example, we can bring in the module as a namespace import into a namespace called utils.
And then for usages we can access the function is palindrome from this namespace.
