var expect = function (val) {
  const toBe = (arg) => {
    return arg === val ? true : new Error("Not Equal");
  };

  const notToBe = (arg) => {
    return arg !== val ? true : new Error("Equal");
  };

  return { toBe, notToBe };
};

// Note the method chaining here, without using this. Need to check in details
console.log(expect(5).toBe(null));
