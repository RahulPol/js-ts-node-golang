## Go Packages

### What is a package in Go?

When we use other languages, such as Java, we have the concept of package, which is a concept in Java to organize our Java files. For example java.lang, this package contains many commonly used classes, such as String. In Go, packages are similar concepts. They organize our go files for easy classification and reuse.

For example, Go's built-in net package

```md
net
├── http
├── internal
├── mail
├── rpc
├── smtp
├── testdata
├── textproto
└── url
```

The above is a directory structure of the net package. net itself is a package, and http under the net directory is another package. From this, you can see that the packages of the Go language are actually directories or folders in our computers. They are used to organize directory structures and files. Go just translates the directory names into [packages].
For example, the net package here is actually the net directory, and the http package is actually the http directory. This is also a naming convention in the Go language. The package name is the same as the directory name where the file is located.

### Package naming

The naming of the Go language package follows the principle of being concise, lowercase, and **having the same name as the directory where the Go file is located.** This makes it easier for us to reference, write, and quickly locate and search.

For example,

```go
package main

import "net/http"

func main() {
	http.ListenAndServe("127.0.0.1:80",handler);
}
```

we can see that what we import is `net/http` called the full path in Go. Because the http package is in net, and net is the top-level package, we must use the full path import so that the Go compiler can find the http package, which is the same as the directory path of our file system.

For programs developed by ourselves or our company, we usually use the domain name as the top-level package name, so we don't have to worry about duplication with other developers' package names.

```go
package main

import "flysnow.org/tools"
```

What if you don't have your own domain name? You can use github.com.

```go
package main

import "github.com/rujews/tools"
```

### Main package

When the package name of a go file is declared mainas , it is equivalent to telling the go compiler that this is an executable program, then the go compiler will try to compile it into a binary executable file.
A `main` package must contain a `main()` function, which is familiar to us. For example, C and Java both have `main()` functions, which are the entry point of a program.

For example,

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}
```

when we execute the command `go build` in this directory, a binary executable file will be generated. In the window system, it is generated hello.exe, and in Unix, MAC and Linux, it is generated hello.

When we execute it in CMD or terminal, we can see the console print:

```md
Hello, 世界
```

### Importing packages

To use a package, you must import it first. The Go language provides `import` a keyword to import a package. This keyword tells the Go compiler where to find the package to be imported on the disk, so the imported package must be a full path package, that is, the location of the package.

```go
import fmt
```

What if we want to import multiple packages? The Go language also provides us with import blocks.

```go
import (
	"net/http"
	"fmt"
)
```

For package names with more than one path, when referencing in the code, use the last package name in the full path as the referenced package name. For example `net/http`, we use in the code `http` instead of `net`.

Now I have imported the package, so when compiling, where does the Go compiler look for them?
Go resolves package imports using two methods,

1. The Go compiler tries to find package in `GOROOT` env variable path, which is the path where Go is installed.
2. The Go compiler uses the go.mod file to resolve package dependencies.

It is worth noting that there is a priority for package searches. The compiler will first `GOROOT` search in , and then `go.mod`, once it finds it, it will stop searching immediately. If it does not find it in the end, it will report a compilation exception.

### Named imports

We know that after using `import` keywords to import a package, we can use the corresponding functions, interfaces, etc. under the package in the code by using the package name. What if the package name we import happens to be repeated? In this case, the Go language allows us to rename the imported package, which is named import.

```go
package main

import (
	"fmt"
	myfmt "mylib/fmt"
)

func main() {
	fmt.Println()
	myfmt.Println()
}
```

Go language stipulates that imported packages must be used, otherwise there will be compilation errors. This is a very good rule because it can prevent us from referencing a lot of useless code, which leads to bloated code and huge programs.
But sometimes, we need to import a package but not use it. According to the rules, this is not possible. For this reason, the Go language provides us with a blank identifier \_. We only need to \_rename the package we imported.

```go
package main

import (
	_ "mylib/fmt"
)
```

### Package init function

Each package can have any number of init functions, which are executed before the main function. The init function is usually used to initialize variables, set up packages, or do other bootstrapping work before the program is executed. For example, the `_` purpose of using the empty identifier to import a package is to execute the init function in the package.

Let's take the database driver as an example. The implementation of these database drivers is specific and can be implemented by anyone. The principle is to define the init function and register the implemented driver to the sql package before the program runs, so that we can use it to operate the database.

```go
package mysql

import (
	"database/sql"
)

func init() {
	sql.Register("mysql", &MySQLDriver{})
}
```

Because we just want to execute the init method of the mysql package and do not want to use this package, we need to rename the package name when importing this package to avoid compilation errors.

```go
import "database/sql"
import _ "github.com/go-sql-driver/mysql"

db, err := sql.Open("mysql", "user:password@/dbname")
```
