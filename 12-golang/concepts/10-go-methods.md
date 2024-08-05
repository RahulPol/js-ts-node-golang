## Go Methods

In Go, functions and methods are different and have a clear distinction. Functions are methods that do not belong to any structure or type, that is, functions have no receivers, while methods have receivers. The methods are either belong to a structure or a newly defined type.

### Methods

The declaration of a method is similar to that of a function. The difference between them is that when a method is defined, a parameter is added between `func` and the method name. This parameter is the receiver. In this way, the method we define is bound to the receiver and is called the method of the receiver.

```go
type person struct {
	name string
}

func (p person) String() string{
	return "the person name is "+p.name
}

// Now that we say that the type person has a String method, let's see how to use it.

func main() {
	p:=person{name:"Rahul"}
    // to call method use . operator
	fmt.Println(p.String()) // the person name is Rahul
}
```

There are two types of receivers in Go: value receivers and pointer receivers. In the example above, we use a value type receiver.

When a method defined with a value type receiver is called, a copy of the value receiver is used, so any operation on the value will not affect the original type variable.

If we use a pointer as the receiver, then it will affect the value of the original type variable.

```go
func main() {
	p:=person{name:"Rahul"}
	p.modifyLocal()
	fmt.Println(p.String()) // Rahul
    p.modifyActual() // Note, we didn't use &p to access pointer receiver method
	fmt.Println(p.String()) // Pranlai
}

type person struct {
	name string
}

func (p person) String() string{
	return "the person name is "+p.name
}

func (p person) modifyLocal(){
	p.name = "Pranali"
}

func (p *person) modifyActual(){
	p.name = "Pranali" //Note with pointer you don't need to use (*) to access struct
}
```

In the above example, did you find that when we call the pointer receiver method, we also use a value variable, not a pointer.
