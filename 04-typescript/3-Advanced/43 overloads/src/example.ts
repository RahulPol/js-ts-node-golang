function reverse(string: string): string;
function reverse(stringArray: string[]): string[];
function reverse(stringOrStringArray: string | string[]) {
  if (typeof stringOrStringArray === "string") {
    return stringOrStringArray.split("").reverse().join("");
  } else {
    return stringOrStringArray.reverse();
  }
}

const hello = reverse("hello");
const h_e_l_l_o = reverse(["h", "e", "l", "l", "o"]);
