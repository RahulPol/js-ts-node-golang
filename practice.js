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

const arr = [1, 2];
const arr3 = [5, 9, [8]];
const arr2 = arr.concat(3, arr3);

console.log(arr2);
