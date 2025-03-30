const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

function solution(n) {
  return n % 2 === 0 ? 'CY' : 'SK';
}

const answer = solution(n);
console.log(answer);