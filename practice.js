function aClean(arr) {
  const map = new Map();

  for (const word of arr) {
    const key = word.toLowerCase().split("").sort().join("");
    map.set(key, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aClean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
