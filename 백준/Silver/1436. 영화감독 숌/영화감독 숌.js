const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
const N = parseInt(input);
let count = 0;
let num = 0;
while (count < N) {
  num++;
  if (String(num).includes("666")) {
    count++;
  }
}
console.log(num);