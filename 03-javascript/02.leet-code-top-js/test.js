// Array Last Prototype
// Array.prototype.last = function () {
//   return this.length > 0 ? this.at(-1) : -1;
// };

// let arr = [1, 2, 3];

// console.log(arr.last());

// Counter
// function* counterGen(n) {
//   while (true) yield n++;
// }

// const counter = counterGen(5);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// function createCounter(n) {
//   return function () {
//     while (true) {
//       return n++;
//     }
//   };
// }

// const counter = createCounter(5);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// sleeps
// function sleep(millis) {
//   return new Promise((res) => setTimeout(res, millis));
// }

// sleep(2000).then(() => console.log("hello"));

// Custom filter
// function customFilter(arr, fn) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const arr = [0, 10, 20, 30],
//   fn = function greaterThan10(n) {
//     return n > 10;
//   },
//   fn1 = function firstIndex(n, i) {
//     return i === 0;
//   };

// console.log(customFilter(arr, fn1));

// custom map
// function customMap(arr, fn) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//   }
//   return result;
// }

// const arr = [0, 10, 20, 30],
//   fn = function plusI(n, i) {
//     return n + i;
//   };

// console.log(customMap(arr, fn));

// fib generator
// function* fibGenerator() {
//   yield 0;
//   yield 1;
//   let a = 0,
//     b = 1;
//   while (true) {
//     yield a + b;
//     [b, a] = [a + b, b];
//   }
// }

// const fibSeries = fibGenerator();

// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);
// console.log(fibSeries.next().value);

// create counter

// function Counter(init) {
//   this.value = init;
//   this.increment = function () {
//     this.value++;
//   };
//   this.decrement = function () {
//     this.value--;
//   };
//   this.reset = function () {
//     this.value = init;
//   };
// }

// const counter = new Counter(10);
// console.log(counter.value);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value);
// counter.decrement();
// counter.decrement();
// console.log(counter.value);

// class Counter {
//   constructor(init) {
//     this.value = init;
//   }

//   increment() {
//     this.value++;
//   }

//   decrement() {
//     this.value--;
//   }
// }

// const counter = new Counter(10);
// console.log(counter.value);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value);
// counter.decrement();
// counter.decrement();
// console.log(counter.value);

// Once
// function once(fn) {
//   let executed = false;
//   return function (...args) {
//     if (!executed) {
//       executed = true;
//       return fn(...args);
//     }
//   };
// }

// const onceGreet = once((name, surname) => "Hello " + name + " " + surname);
// console.log(onceGreet("Rahul", "Pol"));
// console.log(onceGreet("Rahul", "Pol"));
// console.log(onceGreet("Rahul", "Pol"));
// console.log(onceGreet("Rahul", "Pol"));
// console.log(onceGreet("Rahul", "Pol"));

// chunk array
