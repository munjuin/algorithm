const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
let result = '';

for (let i = 1; i <= T; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  const distance = y - x;

  const maxK = Math.floor(Math.sqrt(distance));
  const kSquare = maxK * maxK;

  if (distance === kSquare) {
    result += (2 * maxK - 1) + '\n';
  } else if (distance <= kSquare + maxK) {
    result += (2 * maxK) + '\n';
  } else {
    result += (2 * maxK + 1) + '\n';
  }
}

console.log(result.trim());