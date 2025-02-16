const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ").map(el => Number(el)).sort((a, b) => a - b);

console.log(input[1]);