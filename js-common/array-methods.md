### Add / remove items

arr.push(...items) – adds items to the end,
arr.pop() – extracts an item from the end,
arr.shift() – extracts an item from the beginning,
arr.unshift(...items) – adds items to the beginning.

### Modify arr

<!-- It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements. -->

arr.splice(start[, deleteCount, elem1, ..., elemN]) // from start

<!-- returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed. -->

arr.slice([start], [end]) // not including end

<!-- It accepts any number of arguments – either arrays or values.
The result is a new array containing items from arr, then arg1, arg2 etc.
If an argument argN is an array, then all its elements are copied. Otherwise, the argument itself is copied. -->

arr.concat(arg1, arg2...)

### Iterate

<!-- The arr.forEach method allows to run a function for every element of the array. -->

arr.forEach(function(item, index, array) {
// ... do something with item
});

### Search

- arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
- arr.includes(item, from) – looks for item starting from index from, returns true if found.
  A minor, but noteworthy feature of includes is that it correctly handles NaN, unlike indexOf.

<!-- The function is called for elements of the array, one after another:
item is the element.
index is its index.
array is the array itself.
If it returns true, the search is stopped, the item is returned. If nothing found, undefined is returned.
-->

- find, findIndex, findLastIndex
  let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
  });
  let user = users.find(item => item.id == 1);

  The arr.findIndex method has the same syntax, but returns the index where the element was found instead of the element itself. The value of -1 is returned if nothing is found.

- filter
  let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
  });

  The find method looks for a single (first) element that makes the function return true.
  If there may be many, we can use arr.filter(fn).
  The syntax is similar to find, but filter returns an array of all matching elements:

### Transform an array

- map
  The arr.map method is one of the most useful and often used.
  It calls the function for each element of the array and returns the array of results.
  The syntax is:
  let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
  });
  ** Doesn't modify existing array, instead creates a new array for each element **

- sort
  The call to arr.sort() sorts the array in place, changing its element order.
  It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
  let arr = [ 1, 2, 15 ];
  // the method reorders the content of arr
  arr.sort();
  alert( arr ); // 1, 15, 2
  Did you notice anything strange in the outcome?
  The order became 1, 15, 2. Incorrect. But why?
  ** The items are sorted as strings by default.**
  To use our own sorting order, we need to supply a function as the argument of arr.sort().
  function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
  }

  function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
  }
  let arr = [ 1, 2, 15 ]; //[7,9,4,5,8]
  arr.sort(compareNumeric);
  alert(arr); // 1, 2, 15
  ** Now it works as intended. **
  arr.sort( (a, b) => a - b ); ** Simpler version **
  let countries = ['Österreich', 'Andorra', 'Vietnam'];
  countries.sort( (a, b) => a.localeCompare(b) ) ** for strings with different language **

- reverse
  The method arr.reverse reverses the order of elements in arr.
  let arr = [1, 2, 3, 5, 3];
  arr.reverse();
  alert( arr ); // 3,5,3,2,1

- split and join
  str.split(delim) It splits the string into an array by the given delimiter delim.
  ** Observe it is a method on string and returns an array **
  let names = 'Bilbo, Gandalf, Nazgul';
  let arr = names.split(', ');
  for (let name of arr) {
  alert( `A message to ${name}.` ); // A message to Bilbo (and other names)
  }
  ** The call to split(s) with an empty s would split the string into an array of letters:**
  let str = "test";
  alert( str.split('') ); // t,e,s,t

  arr.join(glue) - It creates a string of arr items joined by glue between them.
  let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
  let str = arr.join(';'); // glue the array into a string using ;
  alert( str ); // Bilbo;Gandalf;Nazgul

- reduce / reduceRight
  The methods arr.reduce and arr.reduceRight are used to calculate a single value based on the array.

  let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
  }, [initial]);

  The function is applied to all array elements one after another and “carries on” its result to the next call.
  Arguments:
  accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
  item – is the current array item.
  index – is its position.
  array – is the array.
  ** If `initial` value is not provided then it uses first element of array as initial value and starts the iteration from 2nd element**

  As function is applied, the result of the previous function call is passed to the next one as the first argument ie `accumulator`.

  let arr = [1, 2, 3, 4, 5];
  let result = arr.reduce((sum, current) => sum + current, 0);
  alert(result); // 15

### Array.isArray

Arrays do not form a separate language type. They are based on objects.
alert(typeof {}); // object
alert(typeof []); // object (same)

Array.isArray(value). It returns true if the value is an array, and false otherwise.
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

### Other methods

- arr.some(fn)
- arr.every(fn)
- arr.fill(value, start, end)
- arr.copyWithin(target,start, end)
- arr.flat(depth) / arr.flatMap(fn)
