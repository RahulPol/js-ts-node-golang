### Map

Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

let map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1) ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

**
As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.
map[key] isn’t the right way to use a Map, we should use map methods: set, get and so on.
**

Every map.set call returns the map itself, so we can “chain” the calls:
map.set('1', 'str1')
.set(1, 'num1')
.set(true, 'bool1');

Iteration over map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
alert(entry); // cucumber,500 (and so on)
}
