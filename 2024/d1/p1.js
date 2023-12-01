// import { input } from "./input";

const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const lines = input.split("\n");

const valid = new Set([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
]);

const wordLength = {
  o: [3],
  t: [3, 5],
  f: [4],
  s: [3, 5],
  e: [3],
  n: [4],
};

let total = 0;

lines.forEach((s) => {
  let lval = "";
  let rval = "";

  // find left val
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (valid.has(char)) {
      lval = char;
      lval;
      break;
    }
  }

  // find right val
  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];
    if (valid.has(char)) {
      rval = char;
      break;
    }
  }
  total += Number(lval + rval);
});
