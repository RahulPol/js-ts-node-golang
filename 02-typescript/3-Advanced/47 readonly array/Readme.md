Here we have a JavaScript function that takes an input array and then invokes sort and reverse to return
a reverse sorted array.
We create an array of five numbers stored in a start variable.
Then we invoke this reverse sorted function and then store the result in a result variable.
Now, at this point, our result is exactly what we expected it to be.
It is the five numbers in reverse sorted order.
However, sadly the reverse sorted function has also mutated our input array.
This is a very common mistake to make when beginning JavaScript development, and the reason is that
the sort and the reverse methods in addition to returning their results, also mutate the original array.
Fortunately with TypeScript, instead of declaring the input as a number array, we can declare it as
a read only number array.
And now any mutating methods will no longer be available on input.
So if we want to use the sort and the reverse methods, the first thing that we will need to do is to
create a copy of the input array using the built in splice method.
This creates a new non read only array which can then be safely sorted and reversed and then returned.
And now when we invoke this reverse sorted method on the start variable, the start variable is no longer
mutated, which is very, very cool.
Now you might remember that for JavaScript arrays, TypeScript has a neat syntax which we prefer as
well as a more verbose array generic syntax.
The same is true for read only arrays.
We prefer the neat syntax as you saw us already.
Use that for the input parameter, but there is an equivalent read only array generic interface.
Now TypeScript also supports read only tuples.
And we've mentioned this before that tuples are simply arrays with fixed lengths.
So let's look at a tuple example.
Here we have a tuple representing a point in two dimensional space with two members, both of type number.
We create this utility move function that accepts a given point and the distance to move in the X and
Y dimensions and then updates the values in the input tuple and then returns the modified tuple.
So if we create a point with X and y zero and move it by amount ten and ten inches the x and y dimensions,
we do get the moved point with 1010.
However, this results in a side effect of mutating our input point also to 1010, which makes us sad.
Now, just like arrays, we can annotate a tuple as read only by using the read only modifier before
the tuple declaration.
And now any attempts to modify any given point will result in a compiler error.
For example, here you can see that we cannot mutate the y value.
So now we can fix this error by replacing our mutating implementation with an implementation that returns
a new tuple created from the existing tuple, plus the moves in the X and Y dimensions.
So now when we invoke the move method on an existing point, we no longer mutate the original point
which replaces our set tears with tears of joy.
