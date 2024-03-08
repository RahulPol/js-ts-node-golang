export type Point = {
  readonly x: number;
  y: number;
};

export type MappedPoint = {
  +readonly [P in keyof Point]?: Point[P];
};

export type Mapped<T> = {
  -readonly [P in keyof T]: T[P];
};

export type Result = Mapped<Point>;

// export type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

export class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ y: 123 });
console.log(state.current); // { x: 0, y: 123 }
