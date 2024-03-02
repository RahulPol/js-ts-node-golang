let dice: number;

function rollDice() {
  dice = Math.floor(Math.random() * 6 + 1);
}

rollDice();

console.log(`Dice: ${dice!}`);

rollDice();
// To avoid this error, add ! to dice at declaration instead at every instance
console.log(`Dice: ${dice}`);

class Point {
  x!: number;
  y!: number;
  constructor() {
    this.moveRandom();
  }
  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}
