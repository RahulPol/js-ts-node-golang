// Open-Close Principle
// Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
// Instead of modifying existing code to add new features, the principle suggests extending the code through inheritance, interfaces, or other mechanisms.
// This allows you to add new functionality without changing the existing codebase, reducing the risk of introducing bugs.

enum CarType {
  Sedan,
  SUV,
  Truck,
}

class Car {
  carType: CarType;
  price: number;

  constructor(carType: CarType, price: number) {
    this.carType = carType;
    this.price = price;
  }

  private discountedPrice() {
    let discount = 0;

    switch (this.carType) {
      case CarType.SUV:
        discount = 10;
        break;
      case CarType.Sedan:
        discount = 15;
        break;
      case CarType.Truck:
        discount = 5;
        break;
    }

    return Math.floor(this.price * discount * 0.01);
  }

  priceAfterDiscount() {
    return this.price - this.discountedPrice();
  }
}

const bmw = new Car(CarType.Sedan, 150000);
console.log(bmw.priceAfterDiscount());

// As you can see, the above implementation satisfies the requirement of single type of discount but in future you can get multiple discount types
// For eg, there can be festival discount, first car discount, credit card discount, etc and to incorporate these new discounts you need to implement
// new methods like PriceAfterFestivalDiscount, PriceAfterFirstCarDiscount, etc. Thus you are breaking OCP as you are not extending instead modifying the type
// This makes code difficult to understand and maintain.

// In order to make this OCP compliant, we created an interface IDiscount which has two method one to check if discount can be applied and another to calculate discount value.
// This interface can be implemented by discount types in the calculate price method we will go through all the discount types check if they are applicable and if yes calculate discounted price.

// Discount interface
interface IDiscount {
  canApply(car: CarWithOCP): boolean;
  calculateDiscount(car: CarWithOCP): number;
}

class CarTypeDiscount implements IDiscount {
  canApply(car: CarWithOCP): boolean {
    return [CarType.SUV, CarType.Sedan].includes(car.carType);
  }
  calculateDiscount(car: CarWithOCP): number {
    let discount = 0;

    switch (car.carType) {
      case CarType.SUV:
        discount = 10;
        break;
      case CarType.Sedan:
        discount = 15;
        break;
    }

    return Math.floor(car.price * discount * 0.01);
  }
}

// car definition
class CarWithOCP {
  carType: CarType;
  price: number;
  discounts: IDiscount[];

  constructor(carType: CarType, price: number, discounts: IDiscount[]) {
    this.carType = carType;
    this.price = price;
    this.discounts = discounts;
  }

  priceAfterDiscount() {
    for (const discount of this.discounts) {
      if (discount.canApply(this)) {
        this.price -= discount.calculateDiscount(this);
      }
    }
    return this.price;
  }
}

const bmwWithOCP = new CarWithOCP(CarType.Sedan, 150000, [
  new CarTypeDiscount(),
]);
console.log(bmwWithOCP.priceAfterDiscount());

// Now if you want to add festival discount you just need to extend the code and not touch the
// existing code

class FestivalDiscount implements IDiscount {
  canApply(car: CarWithOCP): boolean {
    return [CarType.Truck].includes(car.carType);
  }
  calculateDiscount(car: CarWithOCP): number {
    // default to 20% discount
    return car.price * 20 * 0.01;
  }
}

const truckWithOCP = new CarWithOCP(CarType.Truck, 75000, [
  new CarTypeDiscount(),
  new FestivalDiscount(),
]);
console.log(truckWithOCP.priceAfterDiscount());
