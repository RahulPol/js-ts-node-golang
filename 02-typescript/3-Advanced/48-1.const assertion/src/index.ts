const king = "Elvis";
king = "John";

const upperCased = king.toUpperCase();

const dave = {
  name: "dave",
  role: "drummer",
  skills: ["drumming", "head banging"],
} as const;

dave = {
  name: "Grahm",
  role: "singer",
  skills: ["singing", "drumming", "head banging"],
};

dave.name = "Grahm";
dave.role = "singer";
dave.skills = ["singing", "drumming", "head banging"];
