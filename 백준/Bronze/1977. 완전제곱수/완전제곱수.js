const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const M = parseInt(input[0], 10);
const N = parseInt(input[1], 10);

let sum = 0;
let minSquare = -1;

for (let i = 1; i * i <= N; i++) {
  const square = i * i;

  if (square >= M && square <= N) {
    sum += square; // 합계에 더함

    if (minSquare === -1) {
      minSquare = square;
    }
  }
}

if (sum === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(minSquare);
}