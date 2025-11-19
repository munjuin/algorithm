const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const N = parseInt(input[0]);
const F = parseInt(input[1]);
const base = Math.floor(N / 100) * 100;

for (let i = 0; i < 100; i++) {
  const currentNum = base + i;

  if (currentNum % F === 0) {
    console.log(String(i).padStart(2, '0'));
    break;
  }
}