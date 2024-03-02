class Point {
  x?: number;
  y?: number | null;
}

const point = new Point();

console.log(point.x); // undefined

point.x = 10;
point.x = undefined;
point.x = null;

point.y = null;
