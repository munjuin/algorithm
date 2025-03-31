const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(fs.readFileSync(file).toString().trim());

function isPowerOfTwo(n) {
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(input) ? 1 : 0);