Here we have a simple JavaScript function that logs out the text Hello world, and then we invoke it.
Now if you run this code you can see it works as expected.
Logging out the text.
Hello world.
Now your mission, should you choose to accept it, is to log out the text once after one seconds,
then two seconds after two seconds and three s after three seconds.
You might be tempted to do this using set timeout.
For example.
Here we have a timeout of 1000 milliseconds, also known as one second and then we log out the text
once.
Now, if we continue down this path, you end up with this chain of set timeouts for one second and
then the two seconds and then the three seconds.
And you might think that you can unwrap this by moving the set timeout externally and setting up set
timeouts for two seconds and three seconds upfront.
But if you want to start the timeout only after the console log is complete, you will have to do this
chain where you do the console log statement and then set up a new set timeout.
Now in terms of functionality, you have achieved your objective that it does log out one after one
seconds, two s after two seconds and then three s after three seconds.
However, in terms of code with JavaScript, we can do a bit better.
The key to better asynchronous programming in JavaScript is async await.
We start off by creating a main function and the only difference between this function and the function
we created before is the JavaScript async keyword before the function body.
Async await works on top of JavaScript promises.
Now for our requirement of logging stuff after a particular time, we want a promise that resolves after
a particular amount of time.
We create a utility function called delay specifically for creating such promises.
The delay function takes a duration in milliseconds and then returns a new promise created using the
Promise constructor and then uses the resolver for the promise to resolve the promise after the given
milliseconds internally using set timeout.
Now, once we have this delay function, we can use it to create a promise that resolves after a particular
amount of time.
For example, one that resolves after 1000 milliseconds, also known as one second and then a wait for
it to get resolved and then log out some text, for example, once.
And once this log is complete, we can again create a promise for one second and then await it.
Log out to is then create a third promise for one second and await it and log out three years.
Now, in terms of functionality, this code behaves exactly the same as the code we wrote with set timeout
logging out the seconds after appropriate durations.
I guess there is no doubt in anyone's mind comparing the two codes side by side that the async await
version is so much cleaner than the nested set timeouts.
Now as far as TypeScript is concerned, it's supposed the JavaScript async await out of the box and
you can simply use it in your TypeScript source code.
As we have been doing throughout this lesson, you can even set your target to es5 and TypeScript will
transpile this into something that can be run on an older browser.
