// Builder is a creational design pattern that simplifies the creation of complex objects
// by providing a fluent interface, which allows us to build the object step by step. This
// greatly improves the readability and the general developer experience when creating
// such complex objects

// . Imagine having a Boat class with a
// constructor such as the following:

class Boat {
  constructor(
    hasMotor,
    motorCount,
    motorBrand,
    motorModel,
    hasSails,
    sailsCount,
    sailsMaterial,
    sailsColor,
    hullColor,
    hasCabin
  ) {
    // ...
  }
}

// Invoking such a constructor would create some hard to read code, which is easily
// prone to errors (which argument is what?). Take the following code, for example:

const myBoatV1 = new Boat(
  true,
  2,
  "Best Motor Co. ",
  "OM123",
  true,
  1,
  "fabric",
  "white",
  "blue",
  false
);

// A first step to improve the design of this constructor is to aggregate all arguments in
// a single object literal, such as the following:
class Boat {
  constructor(allParameters) {
    // ...
  }
}
const myBoatV2 = new Boat({
  hasMotor: true,
  motorCount: 2,
  motorBrand: "Best Motor Co. ",
  motorModel: "OM123",
  hasSails: true,
  sailsCount: 1,
  sailsMaterial: "fabric",
  sailsColor: "white",
  hullColor: "blue",
  hasCabin: false,
});

// One drawback of using a
// single object literal to pass all inputs at once is that the only way to know what the
// actual inputs are is to look at the class documentation or, even worse, into the code of
// the class. In addition to that, there is no enforced protocol that guides the developers
// toward the creation of a coherent class.
// However, we can do even better than this.

// . Let's take a look at the BoatBuilder class, which
// implements the Builder pattern for the Boat class:
class BoatBuilder {
  withMotors(count, brand, model) {
    this.hasMotor = true;
    this.motorCount = count;
    this.motorBrand = brand;
    this.motorModel = model;
    return this;
  }
  withSails(count, material, color) {
    this.hasSails = true;
    this.sailsCount = count;
    this.sailsMaterial = material;
    this.sailsColor = color;
    return this;
  }
  hullColor(color) {
    this.hullColor = color;
    return this;
  }
  withCabin() {
    this.hasCabin = true;
    return this;
  }
  build() {
    return new Boat({
      hasMotor: this.hasMotor,
      motorCount: this.motorCount,
      motorBrand: this.motorBrand,
      motorModel: this.motorModel,
      hasSails: this.hasSails,
      sailsCount: this.sailsCount,
      sailsMaterial: this.sailsMaterial,
      sailsColor: this.sailsColor,
      hullColor: this.hullColor,
      hasCabin: this.hasCabin,
    });
  }
}

// To fully appreciate the positive impact that the Builder pattern has on the way we
// create our Boat objects, let's see an example of that:

const myBoat = new BoatBuilder()
  .withMotors(2, "Best Motor Co. ", "OM123")
  .withSails(1, "fabric", "white")
  .withCabin()
  .hullColor("blue")
  .build();

//   We can  summarize some general rules for implementing the Builder pattern,
// as follows:
// • The main objective is to break down a complex constructor into multiple,
// more readable, and more manageable steps.
// • Try to create builder methods that can set multiple related parameters at
// once.
// • Deduce and implicitly set parameters based on the values received as input
// by a setter method, and in general, try to encapsulate as much parameter
// setting related logic into the setter methods so that the consumer of the
// builder interface is free from doing so.
// • If necessary, it's possible to further manipulate the parameters (for example,
// type casting, normalization, or extra validation) before passing them to the
// constructor of the class being built to simplify the work left to do by the
// builder class consumer even more.

// Implementing a URL object builder
export class Url {
  constructor(
    protocol,
    username,
    password,
    hostname,
    port,
    pathname,
    search,
    hash
  ) {
    this.protocol = protocol;
    this.username = username;
    this.password = password;
    this.hostname = hostname;
    this.port = port;
    this.pathname = pathname;
    this.search = search;
    this.hash = hash;
    this.validate();
  }
  validate() {
    if (!this.protocol || !this.hostname) {
      throw new Error("Must specify at least a " + "protocol and a hostname");
    }
  }
  toString() {
    let url = "";
    url += `${this.protocol}://`;
    if (this.username && this.password) {
      url += `${this.username}:${this.password}@`;
    }
    url += this.hostname;
    if (this.port) {
      url += this.port;
    }
    if (this.pathname) {
      url += this.pathname;
    }
    if (this.search) {
      url += `?${this.search}`;
    }

    if (this.hash) {
      url += `#${this.hash}`;
    }
    return url;
  }
}

// The plan is to create a UrlBuilder class, which has a setter method for
// each parameter (or set of related parameters) needed to instantiate the Url class.
// Finally, the builder is going to have a build() method to retrieve a new Url instance
// that's been created using all the parameters that have been set in the builder. So, let's
// implement the builder in a file called urlBuilder.js:
export class UrlBuilder {
  setProtocol(protocol) {
    this.protocol = protocol;
    return this;
  }
  setAuthentication(username, password) {
    this.username = username;
    this.password = password;
    return this;
  }
  setHostname(hostname) {
    this.hostname = hostname;
    return this;
  }
  setPort(port) {
    this.port = port;
    return this;
  }

  setPathname(pathname) {
    this.pathname = pathname;
    return this;
  }
  setSearch(search) {
    this.search = search;
    return this;
  }
  setHash(hash) {
    this.hash = hash;
    return this;
  }
  build() {
    return new Url(
      this.protocol,
      this.username,
      this.password,
      this.hostname,
      this.port,
      this.pathname,
      this.search,
      this.hash
    );
  }
}

import { UrlBuilder } from "./urlBuilder.js";
const url = new UrlBuilder()
  .setProtocol("https")
  .setAuthentication("user", "pass")
  .setHostname("example.com")
  .build();
console.log(url.toString());
