// We'll begin our journey from one of the most common design patterns in
// Node.js: Factory. As you will see, the Factory pattern is very versatile and has more
// than just one purpose. Its main advantage is its ability to decouple the creation of
// an object from one particular implementation. This allows us, for example, to create
// an object whose class is determined at runtime. Factory also allows us to expose
// "a surface area" that is much smaller than that of a class; a class can be extended or
// manipulated, while a factory, being just a function, offers fewer options to the user,
// making it more robust and easier to understand. Finally, a factory can also be used
// to enforce encapsulation by leveraging closures.
