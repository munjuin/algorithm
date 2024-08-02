const fs = require("fs");

const input =
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1999`;

const year = input;

if (year % 4 === 0 && (year % 100 != 0) || (year % 400 === 0)) {
  console.log("1");
} else {
  console.log("0");
}
