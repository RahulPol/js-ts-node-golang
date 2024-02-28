class Animal {
  private noAccess: string;
  protected name: string;

  constructor(name: string, noAccess: string) {
    this.name = name;
    this.noAccess = noAccess;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

let cat = new Animal("Cat", "I can acccess here!");
cat.move(10);
cat.name = "Dog";
cat.noAccess = "I can't access outside!";

class Bird extends Animal {
  constructor(name: string, noAccess: string) {
    super(name, noAccess);
  }
  fly(distanceInMeters: number) {
    console.log(`${this.name} flew ${distanceInMeters}m.`);
    console.log(`I can't access ${this.noAccess} either`);
  }
}
