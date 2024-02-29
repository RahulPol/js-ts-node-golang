// In this chapter, we will explore some of the most popular structural design patterns
// and discover how they apply to Node.js. Structural design patterns are focused on
// providing ways to realize relationships between entities.

// In particular, in this section, we will examine the following patterns:
// • Proxy: A pattern that allows us to control access to another object
// • Decorator: A common pattern to augment the behavior of an existing object
// dynamically
// • Adapter: A pattern that allows us to access the functionality of an object
// using a different interface

// A proxy is an object that controls access to another object, called the subject. The
// proxy and the subject have an identical interface, and this allows us to swap one for
// the other transparently; in fact, the alternative name for this pattern is surrogate.

// A proxy intercepts all or some of the operations that are meant to be executed on the
// subject, augmenting or complementing their behavior.

// the proxy and the subject have the same interface, and how
// this is transparent to the client, who can use one or the other interchangeably. The
// proxy forwards each operation to the subject, enhancing its behavior with additional
// preprocessing or postprocessing.

// A proxy can be useful in several circumstances, for example:
// • Data validation: The proxy validates the input before forwarding it to the
// subject
// • Security: The proxy verifies that the client is authorized to perform the
// operation, and it passes the request to the subject only if the outcome of the
// check is positive
// • Caching: The proxy keeps an internal cache so that the proxied operations
// are executed on the subject only if the data is not yet present in the cache
// • Lazy initialization: If creating the subject is expensive, the proxy can delay
// it until it's really necessary
// • Logging: The proxy intercepts the method invocations and the relative
// parameters, recoding them as they happen
// • Remote objects: The proxy can take a remote object and make it appear local
// There are more Proxy pattern applications, but these should give us an idea of
// its purpose.

// When proxying an object, we can decide to intercept all of its methods or only some
// of them, while delegating the rest directly to the subject.

class StackCalculator {
  constructor() {
    this.stack = [];
  }
  putValue(value) {
    this.stack.push(value);
  }
  getValue() {
    return this.stack.pop();
  }
  peekValue() {
    return this.stack[this.stack.length - 1];
  }
  clear() {
    this.stack = [];
  }
  divide() {
    const divisor = this.getValue();
    const dividend = this.getValue();
    const result = dividend / divisor;
    this.putValue(result);
    return result;
  }
}

// Fun fact: In JavaScript, when you perform a division by 0, you get back a mysterious
// value called Infinity.
// Our task in the next few sections will be to leverage the Proxy pattern to enhance
// a StackCalculator instance by providing a more conservative behavior for division
// by 0: rather than returning Infinity, we will throw an explicit error.

class SafeCalculator {
  constructor(calculator) {
    this.calculator = calculator;
  }
  // proxied method
  divide() {
    // additional validation logic
    const divisor = this.calculator.peekValue();
    if (divisor === 0) {
      throw Error("Division by 0");
    }
    // if valid delegates to the subject
    return this.calculator.divide();
  }
  // delegated methods
  putValue(value) {
    return this.calculator.putValue(value);
  }
  getValue() {
    return this.calculator.getValue();
  }
  peekValue() {
    return this.calculator.peekValue();
  }
  clear() {
    return this.calculator.clear();
  }
  multiply() {
    return this.calculator.multiply();
  }
}

const calculator = new StackCalculator();
const safeCalculator = new SafeCalculator(calculator);

calculator.putValue(3);
calculator.putValue(2);
console.log(calculator.multiply()); // 3*2 = 6
safeCalculator.putValue(2);
console.log(safeCalculator.multiply()); // 6*2 = 12
calculator.putValue(0);
console.log(calculator.divide()); // 12/0 = Infinity
safeCalculator.clear();
safeCalculator.putValue(4);
safeCalculator.putValue(0);
console.log(safeCalculator.divide()); // 4/0 -> Error

// in this case we can see that, if we try to
// divide by zero, we will get different outcomes depending on whether we perform
// the division on the subject or on the proxy

// VERY VERY IMPORTANT
// The built-in Proxy object

// The ES2015 specification introduced a native way to create powerful proxy objects.
// We are talking about the ES2015 Proxy object, which consists of a Proxy constructor
// that accepts a target and a handler as arguments:

const proxy = new Proxy(target, handler);

// Here, target represents the object on which the proxy is applied (the subject for our
// canonical definition), while handler is a special object that defines the behavior of the
// proxy.

// The handler object contains a series of optional methods with predefined names
// called trap methods (for example, apply, get, set, and has) that are automatically
// called when the corresponding operations are performed on the proxy instance.

// To better understand how this API works, let's see how we can use the Proxy object
// to implement our safe calculator proxy:

const safeCalculatorHandler = {
  get: (target, property) => {
    if (property === "divide") {
      // proxied method
      return function () {
        // additional validation logic
        const divisor = target.peekValue();
        if (divisor === 0) {
          throw Error("Division by 0");
        }
        // if valid delegates to the subject
        return target.divide();
      };
    }
    // delegated methods and properties
    return target[property];
  },
};

const calculatorV2 = new StackCalculator();
const safeCalculatorV2 = new Proxy(calculator, safeCalculatorHandler);
