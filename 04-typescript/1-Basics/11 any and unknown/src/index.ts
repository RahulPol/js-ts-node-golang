// The any and unknown type accepts any type of data
// and the similarity ends there, after assignment to any
// you can do anything with the variable freely, however after
// assignment to unknown, anything will be strictly type chencked

function log(value: unknown) {
  if (typeof value == "number") {
    // here you can't use toFixed without checking the typeof value first
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}

log(123.456);
log("Hello world");
