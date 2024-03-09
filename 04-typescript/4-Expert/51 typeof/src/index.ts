const center = {
  x: 10,
  y: 20,
  z: 0,
};

type Point = typeof center;

const unit: Point = {
  x: 0,
  y: 0,
  z: 0,
};

const personResponse = {
  name: "john",
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
};

type PersonResponse = typeof personResponse;

function processResponse(person: PersonResponse) {
  console.log("Full name:", `${person.firstName} ${person.lastName}`);
}
