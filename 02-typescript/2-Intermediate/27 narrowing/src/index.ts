class Cat {
  meow() {}
}

class Dog {
  bark() {}
}

type Animal = Cat | Dog;

function speak(animal: Animal) {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function area(shape: Shape) {
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    return shape.width * shape.height;
  }
}

area({ size: 2 }); // 4
area({ width: 2, height: 3 }); // 6
