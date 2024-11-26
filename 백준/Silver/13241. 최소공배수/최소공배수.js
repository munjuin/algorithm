const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const [a, b] = fs.readFileSync(file).toString().trim().split(" ");

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(lcm(a, b));

