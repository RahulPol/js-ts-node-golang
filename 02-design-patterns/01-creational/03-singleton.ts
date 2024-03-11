// The purpose of the Singleton pattern is to enforce the presence of only one instance
// of a class and centralize its access. There are a few reasons for using a single instance
// across all the components of an application:
// • For sharing stateful information
// • For optimizing resource usage

// a typical
// Database class, which provides access to a database:

// 'Database.js'
class Database {
  constructor(dbName, connectionDetails) {
    // ...
  }
  // ...
}

// Typical implementations of such a class usually keep a pool of database connections,
// so it doesn't make sense to create a new Database instance for each request. Plus, a
// Database instance may store some stateful information, such as the list of pending
// transactions.

// A lot of people new to Node.js get confused about how to implement the Singleton
// pattern correctly; however, the answer is easier than what we might think. Simply
// exporting an instance from a module is already enough to obtain something very
// similar to the Singleton pattern

// file 'dbInstance.js'
import { Database } from "./Database.js";
export const dbInstance = new Database("my-app-db", {
  url: "localhost:5432",
  username: "user",
  password: "password",
});

// This is possible because, as we know from Chapter 2, The Module System, Node.js will
// cache the module, making sure not to execute its code at every import
