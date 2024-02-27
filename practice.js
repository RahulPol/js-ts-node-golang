function invertObject(obj) {
  const result = {};

  for (const key in obj) {
    if (result.hasOwnProperty(obj[key])) {
      if (!Array.isArray(result[obj[key]])) {
        result[obj[key]] = [...result[obj[key]]];
      }
      result[obj[key]] = [...result[obj[key]], key];
    } else {
      result[obj[key]] = key;
    }
  }

  return result;
}

const obj = { a: "1", b: "2", c: "2", d: "4" };

console.log(invertObject(obj));
