const fail = (message: string) => {
  throw new Error(message);
};

const sing = function () {
  while (true) {
    console.log("never gonna give you up!");
    console.log("never gonna let you down!");
    console.log("never gonna run around and desert you!");
    console.log("never gonna ket you cry");
    console.log("never gonna say goodbye");
    console.log("never gonna tell a lie and hurt you");
  }
};

let example: never = 10;
