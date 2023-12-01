// import { input } from "./input.mjs";

const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const lines = input.split("\n");

const valid = new Set([
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
]);

const wordLength = {
  o: [3],
  t: [3, 5],
  f: [4],
  s: [3, 5],
  e: [5],
  n: [4],
};

let total = 0;

lines.forEach((s) => {
  let lval = "";
  let rval = "";

  // find left val
  lLoop: for (let sIdx = 0; sIdx < s.length; sIdx++) {
    const char = s[sIdx];

    // char is a string num ex "1"
    if (valid.has(char)) {
      lval = char;
      break;
    }
    // `char` is the first letter of a spelled num ex "o"
    else if (wordLength[char]) {
      for (let j = 0; j < wordLength[char].length; j++) {
        // Window size depends on `char`. ex `char` = "o" -> window = 3
        const window = s.substring(sIdx, sIdx + wordLength[char][j]);
        // check if a spelled num is in the window
        if (valid.has(window)) {
          lval = window;
          break lLoop;
        }
      }
    }
  }

  // find right val. Same as above loop but now starting from the right
  rLoop: for (let sIdx = s.length - 1; sIdx >= 0; sIdx--) {
    const char = s[sIdx];

    if (valid.has(char)) {
      rval = char;
      break;
    } else if (wordLength[char]) {
      for (let j = 0; j < wordLength[char].length; j++) {
        const window = s.substring(sIdx, sIdx + wordLength[char][j]);
        if (valid.has(window)) {
          rval = window;
          break rLoop;
        }
      }
    }
  }

  total += Number(spelledToStrNum(lval) + spelledToStrNum(rval));
});

function spelledToStrNum(s) {
  const map = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  return map[s] || s;
}

// p1: 54667 p2: 54203
console.log(total);
