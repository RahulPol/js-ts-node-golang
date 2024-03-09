type Add = (value: number) => number;

const add: Add = (n: number) => {
  return n;
};

// Another way
type AddV2 = {
  (a: number): number;
  (a: number, b?: number): number;
  debugName?: string;
};

const addV2: AddV2 = (n: number) => {
  return n;
};
