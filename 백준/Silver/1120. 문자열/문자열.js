const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt').toString().trim().split(' ');
const A = input[0];
const B = input[1];

let minDifference = A.length;

for (let i = 0; i <= B.length - A.length; i++) {
  let currentDifference = 0;

  for (let j = 0; j < A.length; j++) {
    if (A[j] !== B[i + j]) {
      currentDifference++;
    }
  }

  minDifference = Math.min(minDifference, currentDifference);
}
console.log(minDifference);