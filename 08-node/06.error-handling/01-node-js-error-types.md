### Node.js Error-handling: Error Types

First of all, it is necessary to have a clear understanding of errors in Node.js. In general, Node.js errors are divided into two distinct categories: operational errors and programmer errors.

- **Operational errors** represent runtime problems whose results are expected and should be dealt with in a proper way.Examples of operational errors include “out of memory,” “an invalid input for an API endpoint,” and so on.
- **Programmer errors** represent unexpected bugs in poorly written code. They mean the code itself has some issues to solve and was coded wrong. A good example is to try to read a property of “undefined.” To fix the issue, the code has to be changed. That is a bug a developer made, not an operational error.

A logical question that follows is: “Why is it useful to divide them into two categories and deal with them?” Without a clear understanding of errors, you might feel like restarting an application whenever an error occurs. Does it make sense to restart an application due to “File Not Found” errors when thousands of users are enjoying the application? Absolutely not.

But what about programmer errors? Does it make sense to keep an application running when an unknown bug appears that could result in an unexpected snowball effect in the application? Again, definitely not!
