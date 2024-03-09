declare function someBooleanOrNullOrUndefined(): boolean | null | undefined;

let notDefined: undefined = undefined;
let notPresent: null = null;

class Point {
  x: number;
  y: number;
}

const point = new Point();
point.x = 10;
// point.y = 20;

console.log(point.x, point.y); /// 10 undefined

function logVowels(value: string) {
  return value.match(/[aeiou]/gi);
}

logVowels("hello"); // ['e','o']
logVowels("sky"); // null
