// In some cases, the traditional implementation of these design patterns is not even
// possible because JavaScript, as we know, doesn't have real classes or abstract
// interfaces. What doesn't change, though, is the original idea at the base of each
// pattern, the problem it solves, and the concepts at the heart of the solution.

// In this chapter and in the following, we will see how some of the most
// important GoF design patterns apply to Node.js and its philosophy, thus
// rediscovering their importance from another perspective. Among these traditional
// patterns, we will also have a look at some "less traditional" design patterns born
// from within the JavaScript ecosystem itself.

// the Factory pattern is very versatile and has more
// than just one purpose. Its main advantage is its ability to decouple the creation of
// an object from one particular implementation. This allows us, for example, to create
// an object whose class is determined at runtime. Factory also allows us to expose
// "a surface area" that is much smaller than that of a class; a class can be extended or
// manipulated, while a factory, being just a function, offers fewer options to the user,
// making it more robust and easier to understand. Finally, a factory can also be used
// to enforce encapsulation by leveraging closures.

// Essentially, a factory wraps the creation of a new instance, giving
// us more flexibility and control in the way we do it. Inside the factory, we can choose
// to create a new instance of a class using the new operator, or leverage closures to
// dynamically build a stateful object literal, or even return a different object type based
// on a particular condition. The consumer of the factory is totally agnostic about how
// the creation of the instance is carried out.

function ImageJpeg(name: string) {
  // jpeg image
}

function ImageGif(name: string) {
  // gif image
}

function ImagePng(name: string) {
  // png image
}

// Simple factory
function createImage(name) {
  if (name.match(/\.jpe?g$/)) {
    return new ImageJpeg(name);
  } else if (name.match(/\.gif$/)) {
    return new ImageGif(name);
  } else if (name.match(/\.png$/)) {
    return new ImagePng(name);
  } else {
    throw new Error("Unsupported format");
  }
}

// Factory to enforce encapsulation
function createPerson(name) {
  let privateProperties: { name: string };
  const person = {
    setName(name: string) {
      if (!name) {
        throw new Error("A person must have a name");
      }
      privateProperties.name = name;
    },
    getName() {
      return privateProperties.name;
    },
  };
  person.setName(name);
  return person;
}

// NOTE:
// Using closures is not the only technique that we have for enforcing
// encapsulation. In fact, other possible approaches are:
// • Using private class fields (the hashbang # prefix syntax),
// introduced in Node.js 12. More on this at nodejsdp.
// link/tc39-private-fields. This is the most modern
// approach, but at the time of writing, the feature is still
// experimental and has yet to be included in the official
// ECMAScript specification.
// • Using WeakMaps. More on this at nodejsdp.link/
// weakmaps-private.
// • Using symbols, as explained in the following article:
// nodejsdp.link/symbol-private.
// • Defining private variables in a constructor (as
// recommended by Douglas Crockford: nodejsdp.link/
// crockford-private). This is the legacy but also the best known approach.
// • Using conventions, for example, prefixing the name of a
// property with an underscore "_". However, this does not
// technically prevent a member from being read or modified
// from the outside.
