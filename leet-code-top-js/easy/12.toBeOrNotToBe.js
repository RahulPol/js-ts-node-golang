var expect = function (val) {
  const toBe = (arg) => {
    return arg === val ? true : new Error("Not Equal");
  };

  const notToBe = (arg) => {
    return arg !== val ? true : new Error("Not Equal");
  };

  return { toBe, notToBe };
};

console.log(expect(5).toBe(null));
