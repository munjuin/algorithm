const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

let totalHeight = 10;

for (let i = 1; i < input.length; i++) {

  if (input[i] === input[i - 1]) {

    totalHeight += 5;
  } else {

    totalHeight += 10;
  }
}

console.log(totalHeight);