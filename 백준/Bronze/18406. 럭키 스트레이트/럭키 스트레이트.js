const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

function solve(n) {
  const len = n.length;
  const mid = len / 2;
  
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < len; i++) {
    const digit = parseInt(n[i]);

    if (i < mid) {
      leftSum += digit;
    } else {
      rightSum += digit;
    }
  }

  if (leftSum === rightSum) {
    console.log("LUCKY");
  } else {
    console.log("READY");
  }
}

solve(input);