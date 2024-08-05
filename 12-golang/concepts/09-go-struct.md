## Go Struct

A struct in Go is a composite data type that groups together variables under a single name. These variables, known as fields, can have different types and are used to create more complex data structures. Structs are similar to classes in other programming languages but do not support inheritance.

### Internal implementation

Internally, a struct in Go is a sequence of fields laid out in memory. Each field has a name and a type, and the entire struct has a specific memory layout determined by the sequence and types of its fields. Go ensures efficient memory alignment for structs, optimizing access to fields.

### Declaration and initialization

To declare a struct type, use the type keyword followed by the struct name and the struct keyword with the fields inside curly braces:

```go
type Person struct {
    Name string
    Age  int
}
```

Structs can be initialized in several ways:

```go
// Zero value initialization: Fields are set to their zero values (empty string for string, 0 for int, etc.).
var p Person

// Using a struct literal: Specify values for some or all fields.
p := Person{Name: "Alice", Age: 30}

// Named fields: Specify values for specific fields (order does not matter).
p := Person{Name: "Bob"}

// Positional fields: Specify values for fields in the order they are declared.
p := Person{"Charlie", 25}
```

### Usage

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    fmt.Println(p.Name) // Accessing a field
    fmt.Println(p.Age)

    // Modifying a field
    p.Age = 31
    fmt.Println(p.Age)
}
```

### Passing structs between functions

Structs can be passed to functions either by value or by reference (using pointers).

**By Value**
When a struct is passed by value, a copy of the struct is made. Changes made to the struct inside the function do not affect the original struct.

```go
func printPerson(p Person) {
    fmt.Println(p.Name, p.Age)
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    printPerson(p)
}
```

**By Reference**
When a struct is passed by reference, the function receives a pointer to the struct. Changes made to the struct inside the function affect the original struct.

```go
func updateAge(p *Person, newAge int) {
    p.Age = newAge
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    updateAge(&p, 31) // Pass the address of the struct
    fmt.Println(p.Age) // Output: 31
}
```
