type Person = {
  name: string;
  email: string;
  phone?: number;
};

const bruce: Person = {
  name: "bruce",
  email: "bruce@example.com",
  phone: 911,
};

const alfred: Person = {
  name: "alfred",
  email: "alfred@example.com",
};

console.log(alfred.phone); // undefined
