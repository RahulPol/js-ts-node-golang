// 1. How to run time consuming code in js
// The below code runs a loop form 1 to 1e9, but such a loop will block the js event loop, so instead of running the
// big task as a whole and blocking other events like fetch, mouse events, rendering of page the following code
// breaks it into multiple task and runs them on the next cycle of event loop.
// For more info: https://javascript.info/event-loop

let i = 0;

let start = Date.now();

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Done in " + (Date.now() - start) + "ms");
  } else {
    console.log(i);
    setTimeout(count); // schedule the new call (**)
  }
}

// count();

//2. try...catch works synchronously
// If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:
// try {
//   setTimeout(function () {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (err) {
//   alert("won't work");
// }

// That’s because the function itself is executed later, when the engine has already left the try...catch construct.

// To catch an exception inside a scheduled function, try...catch must be inside that function:

// setTimeout(function () {
//   try {
//     noSuchVariable; // try...catch handles the error!
//   } catch {
//     alert("error is caught here!");
//   }
// }, 1000);

// 3. Optional “catch” binding
// This is a recent addition to the language. Old browsers may need polyfills.
// If we don’t need error details, catch may omit it:
try {
  // ...
} catch {
  // <-- without (err)
  // ...
}

// 4. How this works in arrow function
var firstName = "Rahul";
let user = {
  firstName: "Aadhya",
  sayHi() {
    console.log(`Hi, ${this.firstName}`);
  },
  sayHiArw: () => {
    console.log(`Hi , ${this.firstName} in arw`);
  },
};

// user.sayHi();
// user.sayHiArw(); // < -- This is strange

var userName = "Rahul";
class User {
  // userName = "Rahul";
  constructor() {
    this.userName = "Aadhya";
  }

  sayHello() {
    console.log(`Hello, ${this.userName}`);
  }

  sayHelloArw = () => {
    console.log(`Hello, ${this.userName} in arw`);
  };
}

let user2 = new User();
// user2.sayHello();
// user2.sayHelloArw();

// 5. There’s a ladder object that allows to go up and down:

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // shows the current step
//       alert( this.step );
//     }
//   };

// Now, if we need to make several calls in sequence, can do it like this:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:
// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
