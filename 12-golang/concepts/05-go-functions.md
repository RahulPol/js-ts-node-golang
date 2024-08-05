## Go Functions

In Go, functions unlike other languages are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

### Function declaration

A function in Go is declared using the `func` keyword, followed by the function name, parameter list, return type(s), and the function body.

```go
func functionName(parameterList) (returnTypeList) {
    // function body
}
```

**Parameters**

- Functions can take zero or more parameters.
- Each parameter must have a type.
- Multiple parameters of the same type can share a type declaration.

**Return types**

- Functions can return zero or more values.
- Return types are specified after the parameter list.
- If multiple return values are used, they must be enclosed in parentheses.

Go supports named return values, which can be useful for improving code clarity. When named return values are used, they act as variables defined at the top of the function.

```go
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return // returns x and y
}
```

### Variadic Functions

Go supports variadic functions, which can accept an indefinite number of arguments. Variadic parameters are declared using an ellipsis (...) before the type.

```go
func sum(numbers ...int) int {
    total := 0
    for _, number := range numbers {
        total += number
    }
    return total
}

func main() {
    fmt.Println(sum(1, 2, 3, 4)) // Output: 10
}
```

### Anonymous functions and closures

Functions in Go can be defined without a name and are called anonymous functions or function literals. When these functions capture variables from outside their scope, they form closures.

```go
func main() {
    adder := func(x int) int {
        return x + 2
    }

    fmt.Println(adder(5)) // Output: 7
}

func main() {
    x := 0
    increment := func() int {
        x++
        return x
    }

    fmt.Println(increment()) // Output: 1
    fmt.Println(increment()) // Output: 2
}
```

### Defer, Panic, and Recover

Go has built-in support for handling functions that need to clean up or recover from errors.
**defer**: Schedules a function call to be run after the function completes, regardless of whether it completes normally or due to a panic.
**panic**: Stops the ordinary flow of control and begins panicking, which can be recovered using `recover`.
**recover**: Recovers from a panic, allowing the program to continue execution.

```go
func main() {
    defer func() {
        // if you don't put recover program exits with panic
        if r := recover(); r != nil {
            fmt.Println("Recovered from:", r)
        }
    }()

    fmt.Println("Starting...")
    if(true){
        panic("something went wrong")
    }
    fmt.Println("This won't be printed.")
}
```

### Function types and function values

Functions in Go are types themselves and can be assigned to variables or passed around as arguments.

```go
func main() {
    add := func(a, b int) int {
        return a + b
    }

    fmt.Println(add(3, 4)) // Output: 7

    callFunction(add, 10, 20)
}

func callFunction(f func(int, int) int, a int, b int) {
    fmt.Println(f(a, b))
}
```

### Higher order functions

Go supports higher-order functions, meaning functions can take other functions as arguments or return functions.

```go
func main() {
    fmt.Println(apply(3, double)) // Output: 6
    fmt.Println(apply(5, square)) // Output: 25
}

func double(n int) int {
    return n * 2
}

func square(n int) int {
    return n * n
}

func apply(n int, fn func(int) int) int {
    return fn(n)
}
```
