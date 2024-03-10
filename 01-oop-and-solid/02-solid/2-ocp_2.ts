// Open-Close Principle
// Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
// Instead of modifying existing code to add new features, the principle suggests extending the code through inheritance, interfaces, or other mechanisms.
// This allows you to add new functionality without changing the existing codebase, reducing the risk of introducing bugs.

// Consider you are working on an e-commerce platform asked to implement filter functionality for the products, like filter by price / size / color / etc.
// and the product definition is as follows
// write a filter function that filters the products
// Hint: filter should be a separate function from Product definition
// and should take products and filters.

class Product {
  constructor(
    public name: string,
    public color: ProductColor,
    public size: ProductSize
  ) {}
}

enum ProductColor {
  Red,
  Blue,
  Green,
}

enum ProductSize {
  Small,
  Medium,
  Large,
}

// create product filter separately
interface ProductFilter {
  isSatisfy(product: Product): boolean;
}

// any filter that implement product filter can filter the product
class ColorFilter implements ProductFilter {
  constructor(public color: ProductColor) {}
  isSatisfy(product: Product): boolean {
    return product.color === this.color;
  }
}

class SizeFilter implements ProductFilter {
  constructor(public size: ProductSize) {}
  isSatisfy(product: Product): boolean {
    return product.size === this.size;
  }
}

function filterProducts(products: Product[], filters: ProductFilter[]) {
  const result: Product[] = [];
  for (const product of products) {
    for (const filter of filters) {
      if (filter.isSatisfy(product)) {
        result.push(product);
      }
    }
  }

  return products;
}

function filterProductsAnd(products: Product[], filters: ProductFilter[]) {
  const result: Product[] = [];
  for (const product of products) {
    let flag = false;
    for (const filter of filters) {
      if (!filter.isSatisfy(product)) {
        flag = false;
        break;
      }
      flag = true;
    }
    if (flag) {
      result.push(product);
    }
  }

  return result;
}

const products = [
  new Product("a", ProductColor.Blue, ProductSize.Small),
  new Product("b", ProductColor.Red, ProductSize.Large),
  new Product("c", ProductColor.Blue, ProductSize.Medium),
  new Product("d", ProductColor.Green, ProductSize.Large),
  new Product("e", ProductColor.Blue, ProductSize.Large),
];

const filters = [
  new ColorFilter(ProductColor.Blue),
  new SizeFilter(ProductSize.Large),
];

// returns all products which are either Blue or large
console.log(filterProducts(products, filters));

// returns all products which are  Blue and large
console.log(filterProductsAnd(products, filters));

// The idea is to write interface for the functionality which will have at least one method
// that specify concrete implementation of the interface should kick in or not
