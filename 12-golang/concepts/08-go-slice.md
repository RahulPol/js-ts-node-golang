## Go slice

A slice is also a data structure that is very similar to an array in that it is designed to easily store and manage data collections. However as opposite to array they have dynamic size.

### Internal implementation

Slices are implemented based on arrays. The underlying layer is an array. Because they are implemented based on arrays, the underlying memory is continuous and non-allocated, which is very efficient. Data can also be obtained through indexes, and it can be iterated and optimized for garbage collection.

The slice object is very small because it is a data structure with only three fields:

1. a pointer to underlying array
2. the length of the slice, and
3. the capacity of the slice

These three fields are the metadata of the underlying array operated by the Go language.

### Declaration and initialization

There are several ways to create slices.

```go
    // This is nil slice as it is just declaration thus cap and len of slice1 is zero.
    // a nil slice means pointer to underlying array is nil
    var slice1 []int

    // This is empty slice and it is different than nil slice.
    // the len and cap of empty slice is 0
    slice2 := []int{}

    // we can use make function to declare and initialize slice

    // you must pass in a parameter to specify the type and length of the slice.
    slice3 :=make([]int,5)

    // you can also specify the capacity of the slice separately.
    slice4 := make([]int,5,10)

    // Another way to create a slice is to use a literal value, that is, to specify the initialization value.
    slice:=[]int{1,2,3,4,5}
```

Another useful way to create slices is to create them based on existing arrays or slices.

```go
slice := []int{1, 2, 3, 4, 5}
slice1 := slice[:] // from index 0 till len(slice)
slice2 := slice[1:]  // from index 1 till len(slice)
slice3 := slice[1:3] // from index 1 till 3 (but not including 3)

fmt.Println(slice1) // {1,2,3,4,5} same as slice
fmt.Println(slice2) // {2,3,4,5}
fmt.Println(slice3) // {2,3}

// len of new slices will be the number of elements present in them
fmt.Println(len(slice1)) // 5
fmt.Println(len(slice2)) // 4
fmt.Println(len(slice3)) // 5

// cap of new slices will be same as the underlying slice
fmt.Println(cap(slice1)) // 5
fmt.Println(cap(slice2)) // 5
fmt.Println(cap(slice3)) // 5

// If you want to create new slice with modified capacity, use slice[i:j:k] syntax
newSlice := slice[1:2:3] // len = 2-1 = 1, cap = 3 - 1 = 2
```

### Using slices

Using slices is just like using arrays. You can get the value of the corresponding element of the slice through the index, and you can also modify the value of the corresponding element.

```go
slice := []int{1, 2, 3, 4, 5}
fmt.Println(slice[2]) //3
slice[2] = 10
fmt.Println(slice[2]) //10
```

**A slice can only access elements within its length. Accessing elements beyond the length will cause a runtime exception. Elements associated with the slice capacity can only be used to grow the slice.**

As we said before, a slice is a dynamic array, so it can grow as needed, and we can use built-in function `append` to do so. The function can append an element to a slice, and `append` will automatically handle the details of how to add it, whether to return the original slice or a new slice, and how to change the length and capacity.

```go
slice := []int{1, 2, 3, 4, 5}
newSlice := slice[1:3]

newSlice=append(newSlice,10)
fmt.Println(newSlice)
fmt.Println(slice)

//Output
[2 3 10]
[1 2 3 10 5] // note modifying newslice also updates underlying slice
```

If the underlying array of the slice does not have sufficient capacity, a new underlying array will be created, the values ​​of the original array will be copied to the new underlying array, and then the new values ​​will be appended. This will not affect the original underlying array.

The built-in one appendis also a variadic function, so we can append several values ​​at the same time.

```go
newSlice=append(newSlice,10,20,30)
```

In addition, we can also ...append one slice to another slice through operators.

```go
slice := []int{1, 2, 3, 4, 5}
newSlice := slice[1:2:3] // {2}; len = 1, cap = 2

newSlice=append(newSlice,slice...)
fmt.Println(newSlice)
fmt.Println(slice)

// output
[2 1 2 3 4 5]
[1 2 3 4 5]
```

### Iterating over slices

A slice is a collection that we can iterate over using a for range loop, printing each element along with its index.

```go
	slice := []int{1, 2, 3, 4, 5}
	for i,v:=range slice{
		fmt.Printf("index:%d, value:%d\n",i,v)
	}
```

If we don't want the index, we can use `_` to ignore it.

### Passing slices between functions

Slices in Go are passed by value, but the value contains a reference to the underlying array. This means that when you pass a slice to a function, a copy of the slice descriptor (which includes the pointer to the underlying array, length, and capacity) is made. However, both the original and the copied slice descriptors point to the same underlying array. Therefore, changes made to the elements of the slice within the function will be reflected in the original slice.

```go
func main() {
	slice := []int{1, 2, 3, 4, 5}
	fmt.Printf("%p\n", &slice)
	modify(slice)
	fmt.Println(slice)
}

func modify(slice []int) {
	fmt.Printf("%p\n", &slice)
	slice[1] = 10
}

// output
0xc420082060
0xc420082080
[1 10 3 4 5]
```
