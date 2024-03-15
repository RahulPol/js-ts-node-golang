var f = function () {
  console.log(`My context is ${this.ctx}`);
};

Function.prototype.boundPolyfill = function (ctxObject) {
  return function () {
    f.apply(ctxObject);
  };
};

f.__proto__.boundPolyfillV2 = function (obj) {
  return function () {
    f.apply(obj);
  };
};

const boundFunc = f.boundPolyfill({ ctx: "My object" });
boundFunc();

const boundFuncV2 = f.boundFuncV2({ ctx: "Another object of mine" });
boundFuncV2();
