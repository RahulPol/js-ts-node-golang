function reverseSortedArray(input: readonly number[]): number[] {
  // return input.sort().reverse();
  return input.slice().sort().reverse();
}

console.log(reverseSortedArray([1, 4, 2, 7]));

type Neat = readonly number[]; // preferred
type Long = ReadonlyArray<number>;

type Point = readonly [number, number];

function move(point: Point, x: number, y: number): Point {
  return [point[0] + x, point[1] + y];
}

const point: Point = [1, 9];
const moved: Point = move(point, 2, 4);
