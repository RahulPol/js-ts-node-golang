// const userURL = "http://localhost:5000";

// async function fetchUser(id) {
//   try {
//     const response = await fetch(url + `?id=${id}`);
//     if (!response.ok) {
//       return Promise.reject("error while fetching user");
//     }
//     return response.json();
//   } catch (e) {
//     return Promise.reject("error while fetching user");
//   }
// }

// let result = [];

// function flatArray(arr) {
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       flatArray(item);
//     } else {
//       result.push(item);
//     }
//   }
// }

// flatArray([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2);

// console.log(result);

let show = function () {
  console.log(this.a);
};
show();

let obj = { a: 15, b: 10 };
obj.show = show;
obj.show();

let obj1 = { a: 20, show };
obj1.show();

var a = 50;
show();

function foo() {
  console.log(this.a);
}
var objFoo = {
  a: 2,
  foo: foo,
};
var bar = objFoo.foo; // function reference/alias!

var a = "oops, global"; // `a` also property on global object
bar(); // "oops, global"
