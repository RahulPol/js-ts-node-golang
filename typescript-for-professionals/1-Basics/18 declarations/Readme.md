The standard way of accessing environment variables within NodeJS is using Process.env.
Here we have a simple piece of code that logs out the logged in user.
However, you can see that we are getting an error on the process variable.
If you hover over the error, you can see that it is complaining that cannot find the name process.
This is because process is not defined anywhere within our codebase and we expect it to be provided
by the NodeJS runtime.
TypeScript provides the ability to declare any variables that are not present within the TypeScript
codebase.
For example, for the process variable, we can simply declare it as a variable of type any.
The syntax for a type declaration is the same as the syntax for declaring any other variable within
your codebase with two key differences.
First, we use the declare keyword before declaring the variable, and then we cannot provide any implementation
details as they are not really a declaration, but rather a definition for example, if you try to provide
a value for the process variable, TypeScript will complain that you cannot provide any implementation
within a declaration.
TypeScript supports creating these declarations within a separate file as well.
These files are called declaration files.
A declaration file is simply a set of declarations and has the file extension dot d, dot ts, so we
can take the type definition for the process variable and create a new file called env dots and you
are free to name your declaration files whatever you want as long as they end in dot dot ts.
And then we paste this declaration for the process variable.
Now, in addition to this process variable, there are a lot of other NodeJS runtime features as well,
and we could keep going down this path of creating these declarations ourselves.
But fortunately there is a better way.
So let's go ahead and delete this declaration file and compile the code using the TypeScript compiler.
Now you can see on the compiler output that not only does it tell you that it cannot find this process
variable, but also provides a suggestion that you might want to install the type definitions using
npm i type node.
Now Types is the name of an organization owned by Microsoft, and packages under this organization are
automatically deployed from a very popular, community driven, open source project called Definitelytyped.
One of the many type definitions is the one for Node and we can install it by running NPM at type slash
node.
Once the installation is complete, you can see that the error for the process variable goes away and
the same lack of errors can be observed if we compile our code using the TypeScript compiler.
Now if you go to the definition of the env variable within our code, you can see that it comes from
a file called process dot TS, which is a part of the package that we installed which is at types slash
node.
Now the NodeJS runtime also provides a number of built in modules as well, and one of them is for file
system known as FS.
Now, in order to use FS or any of the other modules, we simply import it within our code and use it
as you normally would within JavaScript.
Now one great thing about these type definitions worth mentioning is that in addition to providing compile
time type safety, they also provide great talks for all of the APIs that you are using.
For example, for this write file sync function, that's it for the Node.js built ins.
Let's talk about third party packages that you might find on NPM.
Now many of those packages are written in TypeScript, so you don't need to do anything special other
than simply installing them in order to use them in your code base.
There are, however, some packages that require an external type definition, and one such example
is express.
If we simply install, express and try to use it in a simple JavaScript application where we create
an express application, set up a route and start listening, you can see that we get a few errors.
The key one here is that the express module is not found because it is not described anywhere in TypeScript.
Similar to what we did for Node, we can actually simply install the type definitions for Express that
are maintained by the community using NPM I types slash express.
Now, once the installation is complete, you can see that the errors within our.
Go away.
And if we run the compiler on our code base, we don't get any errors on the terminal.
