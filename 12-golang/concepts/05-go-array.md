## Go Array

Arrays are used to store collection of similar data.

### Internal implementation

To understand arrays more clearly, we need to understand their internal implementation. Arrays are fixed-length data types that must store a segment of elements of the same type, and these elements are continuous. We emphasize fixed length here, which can be said to be the most obvious difference from slices.

The type of array storage can be built-in types, such as integers or strings, or custom data structures. Because they are continuous, the index is easier to calculate, so we can quickly index any data in the array.

### Declaration and initialization

The declaration and initialization of arrays are similar to other types. The principles of declaration are:

1. Indicates the type of data to be stored.
2. The number of stored elements, that is, the length of the array.

```go
var array [5]int
```

We have declared an array above array, but we have not initialized it yet. At this time, the values in the `array` are the zero value of the corresponding element type, that is, the array now contains 5 zeros, which is different from Java, which is null.

Once an array is declared, its element type and size cannot be changed. What if you need to store more elements? You can only create a new array and copy the data of the original array to it.

What should we do if we want to initialize it?
We can use the following method:

```go
var array [5]int
array = [5]int{1,2,3,4,5}
```

These two steps are rather cumbersome. Go provides us with :=operators that allow us to initialize directly when creating an array.

```go
array1:=[5]int{1,2,3,4,5}
array2:=[...]int{1,2,3,4,5} // without specifying size
array3:=[5]int{1:1,3:4} // initialize only first and third index value
```

### Using arrays

Array access is very simple, just use the index in the `[]`. Because the memory is continuous, the efficiency of index access is very high.

```go
array:=[5]int{1:1,3:4}
fmt.Printf("%d",array[1]) // 1

// loop through array
for i := 0; i < len(array); i++ {
	fmt.Printf("索引:%d,值:%d\n", i, array[i])
}

// loop using range
for i, v := range array {
    fmt.Printf("索引:%d,值:%d\n", i, v)
}
```

Arrays of the same type can be assigned to each other, but arrays of different types cannot, and a compilation error will occur. So what are arrays of the same type? The Go language stipulates that arrays of the same type must have the same length and the same type of each element.

```go
array := [5]int{1: 1, 3: 4}
var array1 [5]int = array //success
var array2 [4]int = array1 //error
```

### Passing arrays between functions

When passing variables between functions, they are always passed by value. If the variable is an array, then the entire array will be copied and passed to the function. If the array is very large, such as a length of more than 1 million, then this is a large memory overhead.

```go
func main() {
	array := [5]int{1: 2, 3:4}
	modify(array)
	fmt.Println(array)  // 0 2 0 4 0
}

func modify(a [5]int){
	a[1] =3
	fmt.Println(a) // 0 3 0 4 0
}
```

what if we want to modify the array in function call, then we should use pointers

```go
func main() {
	array := [5]int{1: 2, 3:4}
	modify(&array)
	fmt.Println(array) // 0 3 0 4 0
}

func modify(a *[5]int){
	a[1] =3
	fmt.Println(*a) // 0 3 0 4 0
}
```
