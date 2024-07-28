## GO Types

Go is a statically typed programming language, so when the compiler compiles, it needs to know the type of each value so that the compiler knows how much memory to allocate for this value and what this allocated memory represents.

### Basic types

Basic types are types that come with the Go language, such as numeric types, floating-point types, character types, and Boolean types.

- Numeric types: Integers, floating-point, and complex numbers.
- Boolean types: Represents true or false values.
- String types: Represents a sequence of characters.
- Alias types: byte, rune

They are essentially primitive types, which means they cannot be changed. When operating on them, a newly created value is returned. When these values ​​are passed to a function, a copy of the value is actually passed.

### Reference types

Reference types are the opposite of primitive basic types. Their modifications can affect any variable that references them. In the Go language, reference types includes

- pointers
- slices
- maps
- interfaces
- functions
- structs
- channels

### Custom types

The Go language supports creating custom types. For example, the structure types you create in your code is a kind of custom type. However you can create custom type from basic or reference types

For eg,

```go
type Duration int64
```

Now Duration is a custom type, although we have created it using int64, it is not same as int64 so comparison between Duration and int64 yields false as they are different. In order to copy Duration value to int64 you need to do type casting

```go
type Duration int64

var dur Duration
dur=int64(100)
fmt.Println(dur)
```
