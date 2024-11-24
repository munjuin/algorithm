const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = new Set();

for (let i = 0; i < input.length; i++) {
  let str = "";
  for (let j = i; j < input.length; j++) {
    str += input[j];
    result.add(str);
  }
}

console.log(result.size);