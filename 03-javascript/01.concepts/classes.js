/**
 * Classes in JavaScript, introduced in ECMAScript 2015 (ES6), provide a more structured and familiar syntax for defining object-oriented patterns compared to the traditional prototype-based approach. Here are the key features and capabilities of classes in JavaScript:
 */

// Class Declaration:
// You can declare a class using the class keyword followed by the class name.
class MyClass {
  // class body
}

// Constructor Method:
// The constructor method is a special method used for initializing new instances of the class. It's invoked automatically when a new instance of the class is created using new keyword.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Class Methods:
// You can define methods inside a class to perform various operations on class instances.
class Car {
  drive() {
    console.log(`driving...`);
  }
}

// Getter and Setter Methods:
// Getter and setter methods allow you to define custom behavior for getting and setting the values of properties.
class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius can not be negative");
    }
    this.#radius = value;
  }
}

const circle = new Circle(3);
// circle.radius = -4; // This is not allowed
// circle.#radius = 20; // This is not allowed
circle.radius = 20;
console.log(`circle.radius ${circle.radius}`);

// Static Methods:
// Static methods are associated with the class itself rather than instances of the class. They are accessed using the class name.
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(3, 4));

// Inheritance:
// Classes support inheritance through the extends keyword, allowing you to create subclasses that inherit properties and methods from a parent class.

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.eat();

// Super Keyword:
// The super keyword is used to call methods on the superclass within a subclass.

class DogWithSuper extends Animal {
  constructor(name, batteryLevel) {
    super(name, batteryLevel);
  }
}

const dogWithSuper = new DogWithSuper("test", 90);
console.log(dogWithSuper.name);
console.log(dogWithSuper.batteryLevel); // undefined as age is not part of parent constructor

// Prototype Chain:
// Each class has an associated prototype object (prototype property), which is used to implement inheritance and method lookup.

// Class Expressions:
// Classes can also be defined using expressions, similar to function expressions.
const MyClassExpression = class {
  // Class body
};

// Implicit Constructor:
// If a class doesn't have a constructor, an implicit constructor is provided by JavaScript.
class MyClassImplicitConstructor {
  // Implicit constructor provided by JavaScript
}
