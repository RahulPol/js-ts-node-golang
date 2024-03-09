Here we have a variable called direction of type string.
Now the type string can accept any JavaScript string.
For example, a dictionary spelling of the word north.
However, because it accepts all strings, you can even provide it with a string that is a bit poorly
spelt.
Now if you want to ensure that north is always spelt with the correct spelling in your code base, there
are a few JavaScript runtime solutions to that problem.
For example, you can create a variable pointing to this string north and only use that variable instead
of typing the string inconsistently in your code base.
Now, in addition to all the JavaScript runtime solutions, TypeScript also provides a compile time
solution to this problem in the form of literal types.
TypeScript allows you to use any string literal in a type position, for example, the literal string
North.
And now the only value that can ever be assigned to this variable is the literal string.
Not any other type or string will result in a compile time error as shown over here.
Now, of course, a variable that only accepts just one string literal is not particularly useful,
and you would most commonly use a literal type in a union.
For example, we can create a union of all of the cardinal directions that can be used for this direction
variable.
And now anything that is in this union will be fine and anything else will result in a compile time
error.
Now, one great thing about literal string types in TypeScript is that they also show up in autocomplete,
which can result in a great developer experience.
Now, just like any other union type in TypeScript, we can extract this union of string literals into
a named type alias, for example, called Cardinal Direction.
And once you have this type alias, you can start using it in a library of utility functions specific
to your domain.
Now, in addition to literal strings, TypeScript also supports literal types for the boolean true and
false as well as any number value.
To demonstrate that, let's look at another example.
Now we can represent the value of a traditional dice as the number of values one, two, three, four,
five, six.
And then we can create a utility function that uses math.random to roll a dice.
We use the return value from math.random and scale it from 0 to 5.99999.
You get the idea and then use math dot floor to limit this value to be 0 to 5 and then scale it by adding
one to be 1 to 6, which matches our dice value type.
And we informed TypeScript of this fact by using a type assertion.
Now, once we have this type in this utility function in place, we can start using it in our code base.
And at any point, if you try to use it improperly, for example, try to compare the result of a roll
dice to the number literal seven, which is not a member of the dice value.
We get a compile time error from TypeScript, keeping us from shipping bugs to production.
