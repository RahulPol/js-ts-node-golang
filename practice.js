class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  valueOf() {
    return this.arr.reduce((sum, curr) => sum + curr);
  }

  toString() {
    return `[${this.arr.join(",")}]`;
  }
}

const arr1 = new ArrayWrapper([1, 2, 3]);
const arr2 = new ArrayWrapper([1, 2]);

console.log(arr1 + arr2);
console.log(String(arr1));
