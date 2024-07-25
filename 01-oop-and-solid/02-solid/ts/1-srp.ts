// TO RUN THE CODE, use npm run build
// it will generate js files in the out directory
// use node command to run the js file

// TO use import statement in javascript you must specify
// "type": "module"
// in package.json
// since we are using typescript its not required.

import fs from "fs";

// A class should have only one reason to change, meaning it should have only one responsibility.
// This principle encourages the division of functionality into separate classes or modules, each responsible for a specific task.
// It leads to code that is easier to understand, test, and maintain.

// journal class
class Journal {
  entries: string[];
  entryCount: number;

  constructor() {
    this.entries = [];
    this.entryCount = 0;
  }

  // For a journal the concerned methods are as below.
  // add entry to journal
  addEntry(entry: string): number {
    this.entries.push(entry);
    this.entryCount++;
    return this.entryCount;
  }

  // remove from journal
  removeEntry(index: number) {
    if (index >= this.entries.length || index < 0) {
      return { code: -1, message: "invalid entry" };
    }

    this.entries.splice(index, 1);
    return { code: 0, message: "successfully removed entry" };
  }

  // view journal
  viewJournal(): string {
    return this.entries.join(",");
  }

  // following methods on journal are breaking SRP, as journal is concerned with keeping/adding/removing/viewing entries in journal its not concerned with persistance of journal or pulling it from network.

  // save journal to file
  saveToFile(fileName: string) {
    fs.writeFile(fileName, this.entries.join(","), (err) => {
      if (err) {
        return { code: -1, message: err.message };
      }
      return { code: 0, message: "successfully written journal " };
    });
  }

  // load journal from file
  loadFromFile(fileName: string) {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        return { code: -1, message: err.message };
      }
      return { code: 0, message: data.toJSON() };
    });
  }
}

// The SRP ensures that we follow Separation of concerns, which means different concerns or different problems of the system have to reside in different constructs (structure, package, module..).
// Separation of concerns avoids anti pattern, i.e. God Object - which means putting everything into single construct(class, package, module..)

// Now it seems saving journal on disk is it's own responsibility but think about it, you can have other types books, epics,
// manuscripts which also needs to be persisted which means the persistance is a cross cutting concern and requires same logic for different types
// thus it would be a good idea to separate this into another construct  and other types can utilize the same logic, which adheres to DRY principle.
// Here, we are creating it as a simple separate class but it should be a separate module. Thus, any type(in our case Journal, book, etc) that implements
// Printable interface can be persisted on disk

interface Printable {
  string(): string;
}

class Persistance {
  saveToFile(printableEntity: Printable, fileName: string) {
    fs.writeFile(fileName, printableEntity.string(), (err) => {
      if (err) {
        return { code: -1, message: err.message };
      }
      return { code: 0, message: "successfully written journal " };
    });
  }
}

// Now update journal

class JournalSRP implements Printable {
  entries: string[];
  entryCount: number;

  constructor() {
    this.entries = [];
    this.entryCount = 0;
  }

  // implement other methods like
  // addEntry()
  // removeEntry()
  // viewJournal()

  addEntry(entry: string) {
    this.entries.push(entry);
    this.entryCount++;
    return this.entryCount;
  }

  string() {
    return this.entries.join(",");
  }
}

const journalSrp = new JournalSRP();
journalSrp.addEntry("test");
journalSrp.addEntry("srp");
const persist = new Persistance();
persist.saveToFile(journalSrp, "srpTest");
