Here we have a basic TypeScript source code with a single type annotation.
Now, TypeScript is not something that can be run natively on Node, so if you try to run it through
it, you will actually get a syntax error as shown over here.
Of course, the simplest way to run any piece of TypeScript code is to first compile it with JavaScript
and we can do that by running Npx TSC.
And now once we have the output JavaScript in the lib folder, we can simply execute it through node.
Now if you want to skip this, compile TypeScript to JavaScript and then execute it process, there
is an NPM package called Node that can compile your TypeScript to JavaScript on the fly and then execute
it through Node in a single step.
So in order to run this TypeScript source code, we simply run Npx TS node.
Source Index.ts.
This will bring in the TS node package from the internet and then execute it locally and you can see
that the output matches what we expected.
Now with any NPM package, if you want to skip this download from the internet flow, you can install
that package into your folder.
So for TS node we simply run NPM TS node and once the installation is complete, if we run the same
command again, you can see that it executes much faster.
Now if you find yourself running some NPM command again and again, you can even move it into the Package.json
scripts section to give it a nicer name.
So within our scripts section we create an entry for Start which will execute TS node for source Index.ts.
And now we can simply open up the terminal and run npm start, which will in turn run TS node and you
can see that the output matches what we expected.
