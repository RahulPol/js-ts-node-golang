type Point = {
  x: number;
  y: number;
};

let point: Point;

function initializePoint() {
  point.x = 10;
  point.y = 20;
}

initializePoint();

console.log("After initialization", point!.x, point.y);

function initializePointV2(): Point {
  return { x: 10, y: 20 };
}

let point2 = initializePointV2();
console.log("After initialization", point2.x, point2.y);
