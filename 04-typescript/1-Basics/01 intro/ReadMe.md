Now, in order to get started with TypeScript, the first thing that we need to do is to install the
NodeJS runtime.
NodeJS is a standard development tool used for developing both backend as well as front end applications
for JavaScript as well as TypeScript.
Now, in order to install NodeJS, open up your browser and head on over to nodejs.org.
Now the homepage will try to give you a version of NodeJS that you should download and install for your
operating system.
But in case you want to look at all the available options, you can head on over to the download page
and then select the installer specific to your requirements.
Now, once you have the installer downloaded and executed, you can verify that the installation succeeded
by opening up the command prompt or terminal and running the command node minus minus version.
Now the specific version of NodeJS that I have displayed over here is actually not that important as
the features that we will be using throughout this course are not actually version specific.
Now, the NodeJS installation also installs two additional executables and we will be using them throughout
this course so we can verify that they are working correctly as well by running NPM space minus minus
version and similarly NPM space minus minus version.
And that's it for NodeJS installation.
Now let's go ahead and use NodeJS to create our first TypeScript project.
We open up a new terminal session, create a new directory specific to our project, and then use the
NPM init command to create a new NodeJS package.
We additionally pass in the command line flag minus Y to select the default options.
NodeJS packages are the standard way to do front end as well as back end software development with JavaScript.
Now, because we are using TypeScript, we will additionally install TypeScript by running the command
`npm i typescript`
This will install the TypeScript compiler TSC into this particular package.
We can run the version of TSC that comes bundled with TypeScript within this package by using `npx tsc --init --rootDir src --outDir lib`
and then for command line flags for TSC, we pass in minus minus init to initialize a new tsconfig.
A tsconfig.json file is used to store TypeScript configuration options.
Now for our initial options we use minus minus root dir to specify that all our source code will be
located in the SRC folder and then a minus minus out dir lib to indicate that our output JavaScript
code should be generated into the lib folder.
Now, once this command executes, it notifies us that it's created a tsconfig.json file.
Now before we start writing TypeScript code, let's talk about IDEs.
Now my recommended IDE for starting web development is vs code.
Visual Studio code is by Microsoft, the creators of TypeScript and it is available for free for Windows
as well as Mac and Linux.
You can go to code.visualstudio.com and you can download it from the home page or you can head on over
to the downloads section and get an installer that is more specific to your requirements.
Now, once you have Visual Studio code downloaded and installed, you can use it to open up the project
folder that we created earlier.
Now let's go ahead and create our first TypeScript source code file under Source Index.ts.
For our basic example, we will create a message variable of type string that we will initialize to
the value Hello world and use the built in JavaScript runtime method console dot log to log this message
to the terminal.
Now TypeScript cannot be executed by NodeJS or the browsers by itself.
The first step is to actually take the TypeScript source code and compile it to JavaScript that NodeJS
and browsers can execute.
Now, in order to compile the TypeScript files into JavaScript files, we open up the terminal and execute
`npx tsc` and we will start the TypeScript compiler in watch mode with minus minus watch.
This means that if you make any modifications to our source code, it will recompile them on the fly.
Now on its initial compile, it's already generated the output JavaScript into the lib folder.
So for our source index.ts file, TypeScript has gone ahead and generated lib Index.js file.
And as you can see, the Index.ts and the Index.js file are quite similar.
The key difference between the Index.ts and the Index.js file is that the type annotation for the message
variable that is colon string has been removed when the TS file has been transformed to JavaScript file.
Now once we have the JavaScript file we can open up a new terminal and use node to execute this JavaScript
file using node lib Index.js and you can see that it simply logs out the message.
Now, because we left the TypeScript compiler running in watch mode, if you make any modifications
to the TypeScript source code, for example, add additional text to the message variable the compiler.
Immediately generates the new JavaScript.
And if you execute the new code using Node, you can see that we get the updated result.
Now, as we've hinted before, the key difference between TypeScript and JavaScript is simply these
type annotations.
For example, the annotation for string.
What this means is that if we try to assign something like a number to a variable that is annotated
as string, we get an immediate compile time error instead of something going weird at runtime.
So even if you are someone who is new to JavaScript, TypeScript is a great way to get started on your
JavaScript journey as it will help ensure that your code never has any syntactic or type errors.
