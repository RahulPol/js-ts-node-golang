## Go Documentation

In the Go language, Go provides us with tool `go doc` for quickly generating and viewing documents, allowing us to easily write and view documents.

```sh
➜  hello go help doc
usage: go doc [-u] [-c] [package|[package.]symbol[.method]]

Doc prints the documentation comments associated with the item identified by its
arguments (a package, const, func, type, var, or method) followed by a one-line
summary of each of the first-level items "under" that item (package-level
declarations for a package, methods for a type, etc.).

Flags:
	-c
		Respect case when matching symbols.
	-cmd
		Treat a command (package main) like a regular package.
		Otherwise package main's exported symbols are hidden
		when showing the package's top-level documentation.
	-u
		Show documentation for unexported as well as exported
		symbols and methods.

```

Go provides two ways to view documents using `go doc` command

1. One is to view them in the terminal.
2. The second way is to use a browser to view it.

### Viewing documents in terminal

This method is suitable for terminal development. They generally do not want to leave the terminal and continue coding after checking. At this time, using `go doc` commands is a good choice.
`

```go
➜  lib go doc json
package json // import "encoding/json"

Package json implements encoding and decoding of JSON as defined in RFC
4627. The mapping between JSON and Go values is described in the
documentation for the Marshal and Unmarshal functions.

See "JSON and Go" for an introduction to this package:
https://golang.org/doc/articles/json_and_go.html

func Compact(dst *bytes.Buffer, src []byte) error
func HTMLEscape(dst *bytes.Buffer, src []byte)
func Indent(dst *bytes.Buffer, src []byte, prefix, indent string) error
func Marshal(v interface{}) ([]byte, error)
func MarshalIndent(v interface{}, prefix, indent string) ([]byte, error)
func Unmarshal(data []byte, v interface{}) error
type Decoder struct{ ... }
    func NewDecoder(r io.Reader) *Decoder
type Delim rune
type Encoder struct{ ... }
    func NewEncoder(w io.Writer) *Encoder
type InvalidUTF8Error struct{ ... }
type InvalidUnmarshalError struct{ ... }
type Marshaler interface{ ... }
type MarshalerError struct{ ... }
type Number string
type RawMessage []byte
type SyntaxError struct{ ... }
type Token interface{}
type UnmarshalFieldError struct{ ... }
type UnmarshalTypeError struct{ ... }
type Unmarshaler interface{ ... }
type UnsupportedTypeError struct{ ... }
type UnsupportedValueError struct{ ... }
```

The above is jsonan example of a package. Looking at the documentation of the package, we can see that it has a structure called `Decoder`. Let's further look at the documentation of this structure.

```go
➜  lib go doc json.Decoder
package json // import "encoding/json"

type Decoder struct {
	// Has unexported fields.
}
    A Decoder reads and decodes JSON values from an input stream.


func NewDecoder(r io.Reader) *Decoder
func (dec *Decoder) Buffered() io.Reader
func (dec *Decoder) Decode(v interface{}) error
func (dec *Decoder) More() bool
func (dec *Decoder) Token() (Token, error)
func (dec *Decoder) UseNumber()
```

## Viewing documents in browser

It is very simple to start a web online API documentation service, `godoc` and just use it.

```sh
➜  lib godoc -http=:6060
```

The http at the end is to specify the IP and Port that the Web service listens on. After running, we can open the browser and enter http://127.0.0.1:6060to access it.

### Generating your own documentation

Another highlight of the Go documentation tool is that it can support the code written by developers themselves. As long as the developers follow certain rules, the documentation can be automatically generated.

For example,

```go
package main

import "fmt"

// Add takes two integers and returns their sum.
//
// Example usage:
//  sum := Add(2, 3)
//  fmt.Println(sum) // Output: 5
func Add(a int, b int) int {
    return a + b
}

func main() {
    sum := Add(2, 3)
    fmt.Println("Sum:", sum) // Output: Sum: 5
}
```

output in browser

```md
Package main

    import "path/to/your/package"

FUNCTIONS

    func Add(a int, b int) int
        Add takes two integers and returns their sum.

        Parameters:
          - a: The first integer to add.
          - b: The second integer to add.

        Returns:
          - The sum of the two integers.

        Example usage:
          sum := Add(2, 3)
          fmt.Println(sum) // Output: 5
```
