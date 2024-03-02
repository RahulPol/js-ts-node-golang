// 4. Interface Segregation Principle (ISP):

// Clients should not be forced to depend on interfaces they do not use. [Read next line :)]
// This principle advises against creating large, monolithic interfaces and instead encourages the creation of smaller, focused interfaces tailored
// to specific client requirements.
// It prevents clients from being burdened with methods they don't need, promoting a cleaner and more efficient design. Basically, it dictates that
// you should create multiple interfaces instead of creating a single monolith interface.

// Consider you have a requirement to create an API which will allow client to connect to printing machines which can print, scan and fax.
// To incorporate this requirement you create an interface,

interface Machine {
  print(): void;
  scan(): void;
  fax(): void;
}

// and create class for different machine types
class CannonIX2348 implements Machine {
  print(): void {
    console.log("Print Method");
  }
  scan(): void {
    console.log("Scan Method");
  }
  fax(): void {
    console.log("Fax Method");
  }
}

class HP4957 implements Machine {
  print(): void {
    console.log("Print Method");
  }
  scan(): void {
    console.log("Scan Method");
  }
  fax(): void {
    console.log("Fax Method");
  }
}

// Now we are burdening OldMachine to implement scan and fax, even its not required.
// class OldMachine implements Machine {
//   print(): void {
//     console.log("Print Method");
//   }
//   scan(): void {
//     throw new Error("Method not implemented.");
//   }
//   fax(): void {
//     throw new Error("Method not implemented.");
//   }
// }

// The solution to this problem is to segregate the interface into multiple interfaces
interface PrintingMachine {
  print(): void;
}

interface ScanningMachine {
  scan(): void;
}

interface FaxMachine {
  fax(): void;
}

// with segregation we made sure the only required methods are implemented in the class
// lets correct OldMachine implementation

class OldMachine implements PrintingMachine {
  print(): void {
    console.log("Print method");
  }
}
