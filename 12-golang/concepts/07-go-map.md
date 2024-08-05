## Go Map

Map is a data structure, a collection, used to store a series of unordered key-value pairs. It is stored based on keys, and the key is like an index, which is also the powerful part of Map. It can quickly retrieve data, and the key points to the value associated with the key.

### Internal implementation

Map is implemented by giving a hash table, which is why we often call map a Hash table. The hash table of a Map contains a set of buckets. Each time you store and search for a key-value pair, you must first select a bucket. How do you select a bucket? Just pass the specified key to the hash function, and you can index the corresponding bucket and find the corresponding key value.

The advantage of this method is that the more data is stored, the more evenly the index is distributed, so the faster we can access the key-value pairs.

**Map stores an unordered collection of key-value pairs.**

### Declaration and initialization

Maps can be created using `make` functions and Map literals. We have used `make` function to create slices, and in addition, they can also be used to create Maps.

```go
// creates a map with keys of type string and value of type int
dict:=make(map[string]int)

fmt.Println(dict) // map[], means empty map
fmt.Println(dict == nil) // false, empty doesn't mean nil
```

Let's store a key-value pair.

```go
dict1 := make(map[string]int)
dict1["North"] = 43
dict1["East"] = 30

// There is also a way to create and initialize a map using map literals.
dict2 := make(map[string]int){"North":43, "East": 30}

// Of course, we can not specify any key-value pairs, that is, an empty map.
dict3 := make(map[string]int){}

// If you declare the map and not initialize it, then its value is nil
var dict4 map[string]int
fmt.Println(dict4) // nil
dict4["wrong"]=0 // error
```

The key of a Map can be any value, and the key type can be a built-in type or a structure type. But in any case, the key must be comparable using `==` operators, so slices, functions, and structure types containing slices cannot be used as Map keys because they have reference semantics and are not comparable.

There are no restrictions on Map values. Slices, which cannot be used in keys, can be used in values.

### Using map

Map is very simple to use.

```go
// assign values to map
dict1 := make(map[string]int)
dict1["North"] = 43 // assign 43 to "North" key
dict1["East"] = 30

dict1["North"] = 55 // override value of "North"  from 43 to 55

// fetch values from map
NorthDirection := dict1["North"] // 55

// using wrong key yield zero value of value type
NorthDirection1 := dict1["NOrTh"] // 0

// to check if value exists or not use additional variable
NorthDirection, exists := dict1["North"] // 55 , true
NorthDirection1, exists := dict1["NOrTh"] // 0, false

// to delete key from map use delete function
// The `delete` function accepts two parameters, the first is the Map to be operated, and the second is the key of the Map to be deleted.
delete(dict1, "North")

// to iterate over all keys use for...range loop
dict2 := map[string]int{"North": 43, "East": 30}
for key, value := range dict2 {
	fmt.Println(key, value) // North, 43
}

// there is an issue in looping over map. It can't guarantee same output, to avoid it sort the keys
keys := make([]int)
for key := range dict2 {
	keys = append(keys, key)
}

sort.Ints(keys)

for _, key := range keys {
    fmt.Println(key, dict2[key])
}
```

### Passing maps between functions

Passing a Map between functions will not make a copy of the Map. That is to say, if a Map is passed to a function and the function modifies the Map, all references to the Map will be aware of the modification.

```go
func main() {
	dict := map[string]int{"North": 60, "East": 43}
	modify(dict)
	fmt.Println(dict["North"]) // 10
}

func modify(dict map[string]int) {
	dict["North"] = 10
}
```
