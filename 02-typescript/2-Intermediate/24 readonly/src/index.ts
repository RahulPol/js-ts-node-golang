type Point = {
  readonly x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 10,
};

//variable assignment
point = { x: 10, y: 20 };

//Property assignment
point.x = 40;
point.y = 30;

class Animal {
  public readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal("sheep");
console.log(sheep.name); // Allow
sheep.name = "wolf"; // Disallow
