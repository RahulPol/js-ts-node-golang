TypeScript allows you to create abstract classes, a concept that you might be familiar with from other
programming languages.
A class can be marked as abstract by using the abstract keyword, and then you get the ability to provide
abstract members.
For example, here we have an abstract method called command line.
Now the abstract members do not have any implementation, and the whole objective of an abstract class
is for it to be inherited and then for the child classes to provide an implementation for these abstract
members.
This means that within other portions of our abstract class, we get to assume that these members will
be provided.
Here we have a dummy execute function that simply logs the command line to the console.
But in a more real world scenario, it might spawn up an actual terminal process.
So this abstract command class takes a particular command line from its child classes and then provides
the reusable functionality to execute that command line.
So the main consumers of an abstract class are classes that want to extend it.
Here we create a class called Git Reset Command that extends this command.
Now, as soon as we extend the base abstract class, we get a compiler error.
And if you look at the compiler error message, you can see that it is complaining that the child class
does not provide the functionality required by the abstract class, which is the command line method.
So we go ahead and provide the command line and now we get the execute method for free.
We can repeat the process for as many commands as you want, for example, the git fetch command.
So now we can create instances of the git reset command and the git fetch commands and call their execute
methods.
Now, one final thing worth mentioning that might be obvious is that you cannot create instances of
an abstract class by itself.
The obvious reason is that an abstract class has abstract that is missing features.
For example, here the command line method would be missing.
