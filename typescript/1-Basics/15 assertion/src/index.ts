let hello = load();

// one way
// if (typeof hello === "string") {
//   const trimmed = hello.trim();
// }

// Another way, type assertion with as
const trimmed = (hello as string).trim();

// type assertion with <>, it won't work in react tsx files
const trimmed_1 = (<string>hello).trim();
