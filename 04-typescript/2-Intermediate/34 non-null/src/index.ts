type Person = {
  name: string;
  email: string | null | undefined;
};

function sendMail(email: string) {
  console.log(`send mail to ${email}`);
}

function ensureEmailExists(person: Person) {
  if (person.email == null)
    throw Error(`Person ${person.name} does not have email`);
}

function contact(person: Person) {
  ensureEmailExists(person);
  sendMail(person.email);

  if (person.email == null)
    throw Error(`Person ${person.name} does not have email`);
  sendMail(person.email);
}
