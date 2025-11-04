const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const output = [];

for (let i = 1; i <= N; i++) {
  const K_bigint = BigInt(input[i]);

  if (K_bigint % 2n === 0n) {
    output.push('even');
  } else {
    output.push('odd');
  }
}

console.log(output.join('\n'));