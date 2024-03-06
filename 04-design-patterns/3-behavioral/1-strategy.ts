// Strategy is a behavioral design pattern that lets you define a family of algorithms,
// put each of them into a separate class, and make their objects interchangeable.

// In simple terms, you provide strategy as interface in client ie main class
// through composition. After this, you create concrete implementation
// of each strategy. Now you have the power to initialize the main class with specific
// strategy and the corresponding strategy code executes.

// To make it more flexible you can provide setStrategy method to switch strategy at runtime.

// This is very similar to /03-solid/2-ocp_1.ts, where we specified different way of
// calculating discount and depending on the initialization the product discount is
// calculated.

/**
 * The Context defines the interface of interest to clients.
 */
class Context {
  /**
   * @type {Strategy} The Context maintains a reference to one of the Strategy
   * objects. The Context does not know the concrete class of a strategy. It
   * should work with all strategies via the Strategy interface.
   */
  private strategy: IStrategy;

  /**
   * Usually, the Context accepts a strategy through the constructor, but also
   * provides a setter to change it at runtime.
   */
  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  /**
   * Usually, the Context allows replacing a Strategy object at runtime.
   */
  public setStrategy(strategy: IStrategy) {
    this.strategy = strategy;
  }

  /**
   * The Context delegates some work to the Strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  public doSomeBusinessLogic(): void {
    // ...

    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));

    // ...
  }
}

/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface IStrategy {
  doAlgorithm(data: string[]): string[];
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
class ConcreteStrategyA implements IStrategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategyB implements IStrategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
const context = new Context(new ConcreteStrategyA());
console.log("Client: Strategy is set to normal sorting.");
context.doSomeBusinessLogic();

console.log("");

console.log("Client: Strategy is set to reverse sorting.");
context.setStrategy(new ConcreteStrategyB());
context.doSomeBusinessLogic();
