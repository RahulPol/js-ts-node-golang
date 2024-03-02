let suffix: null | string = getSuffix();

if (suffix != null) {
  let exampleOne = "jane" + suffix.toUpperCase();

  ["john", "jane"].forEach((value) => value + suffix.toUpperCase());
}

let example: string | null = forEaxample();
if (example != null) {
  const exampleLocal = example;
  setTimeout(() => exampleLocal.toUpperCase, 0);
}
example = null;
