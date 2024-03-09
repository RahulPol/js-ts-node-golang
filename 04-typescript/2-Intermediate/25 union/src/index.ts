/**
 * @param input a command or array of commands
 * @returns a single trimmed string
 */

function formatCommandLine(input: string | string[]): string {
  if (typeof input === "string") {
    return input.trim();
  } else {
    return input.map((ip) => ip.trim()).join("");
  }
}

console.log(formatCommandLine("text"));
console.log(formatCommandLine(["text", "blob"]));

type Padding = number | string;

/**
 * Takes a string and adds `padding` to the left.
 * If `padding` is a number, then that number of spaces is added to the left.
 * If `padding` is a string, then `padding` is appended to the left.
 */
function padLeft(value: string, padding: Padding) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected number or string, got '${padding}'.`);
}

padLeft("Hello world", 4); // '    Hello world'
padLeft("Hello world", "  "); // '  Hello world'
padLeft("Hello world", "---"); // '---Hello world'
padLeft("Hello world", false); // Error
