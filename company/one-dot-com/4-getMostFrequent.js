/**
 * Given a set of arrays of numbers, determine numbers that occurs frequently
    Example:
    const a = [1,5,2,5,3,7,3,5,9,0];
    const b = [2,4,7,5,1,5,8];
    const c = [5,5,7,6];
    const d = [5,5,5,7,7,7,7];
    getMostFrequent([a,b,c,d]); // prints: 5
 */

const getMostFrequent = (arrays) => {
  let combinedArray = [];
  let map = new Map();
  let maxCount = 0;
  let result = 0;

  const size = arrays.length;
  for (let i = 0; i < size; i++) {
    combinedArray = [...combinedArray, ...arrays[i]];
  }

  for (let i = 0; i < combinedArray.length; i++) {
    const key = combinedArray[i];
    map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
  }

  for (let [k, v] of map) {
    if (maxCount < v) {
      maxCount = v;
      result = k;
    }
  }

  return { result, count: maxCount };
};

const a = [1, 5, 2, 5, 3, 7, 3, 5, 9, 0];
const b = [2, 4, 7, 5, 1, 5, 8];
const c = [5, 5, 7, 6];
const d = [5, 5, 5, 7, 7, 7, 7];
console.log(getMostFrequent([a, b, c, d]));
