// 5. Dependency Inversion Principle (DIP):

// High-level modules should not depend on low-level modules. Both should depend on abstractions.
// Abstractions should not depend on details; details should depend on abstractions.
// This principle advocates the use of interfaces and abstract classes to define the interaction between high-level and low-level components,
// reducing coupling and increasing flexibility.

// Simply said, both high-level and low-level modules will depend on abstractions rather than high-level
// modules dependent on low-level modules. Every dependency in the design should be directed toward an
// abstract class or interface. No dependency should target a concrete class.

// Consider an order service. In this example, we’ll use the OrderService class, which records orders in a
// database. The low level class MySQLDatabase serves as a direct dependency for the OrderService class.

class Order {}
class OrderService {
  public database: MySQLDatabase;

  constructor() {
    this.database = new MySQLDatabase();
  }

  public create(order: Order): void {
    this.database.create(order);
  }

  public update(order: Order): void {
    this.database.update;
  }
}
class MySQLDatabase {
  public create(order: Order) {
    // create and insert to database
  }

  public update(order: Order) {
    // update database
  }
}

// By designing an interface and making the OrderService class dependent on it, we can improve on this
// situation by reversing the dependency. Now, rather than relying on a low-level class, the high-level
// class depends on an abstraction.

interface IDatabase {
  create(order: Order): void;
  update(order: Order): void;
}

class MySQLDatabaseV2 implements IDatabase {
  public create(order: Order) {
    // create and insert to database
  }

  public update(order: Order) {
    // update database
  }
}

class OrderServiceWithDIP {
  database: IDatabase;

  constructor(database: IDatabase) {
    this.database = database;
  }

  public create(order: Order): void {
    this.database.create(order);
  }

  public update(order: Order): void {
    this.database.update(order);
  }
}

let orderService: OrderServiceWithDIP = new OrderServiceWithDIP(
  new MySQLDatabase()
);
