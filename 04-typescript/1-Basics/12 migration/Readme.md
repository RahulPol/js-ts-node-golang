The main reason why any was added to the TypeScript type system was to allow easy migration of JavaScript
code to TypeScript.
For example, here we have some JavaScript code that uses zero type annotations and you can see that
it works without any compile time TypeScript errors.
Now the main reason for that is that Unannotated variables in TypeScript are inferred to be any.
To migrate this JavaScript to annotated TypeScript, we can simply add an explicit any annotation and
that's the quickest solution.
But here TypeScript is not doing any hand-holding in the form of type checking for you.
So if this JavaScript function loadstring returns something that is not a string, for example, an
undefined, the code will blow up at runtime and that's where the unknown type comes in handy.
If you have time to do reliable refactoring of your JavaScript code, you can annotate the legacy variables
as unknown, and TypeScript will warn you at each instance where you try to use the value from the variable,
allowing you to add sanity checks before using it.
So if you want to use it as a string, you need to add an explicit JavaScript runtime check, for example,
using the typeof operator.
And similarly, if you want to use it as a number, you will need to add an explicit check.
So in summary, if you want a quick fix migration, use any.
But if you have the time to do more reliable refactoring or are dealing with code that you don't trust
fully use unknown.
This might even help you understand the code a bit better.
