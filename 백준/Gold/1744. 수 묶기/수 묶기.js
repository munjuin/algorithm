const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const nums = input.slice(1).map(Number);

function solve() {
  const positive = [];
  const negative = [];
  let sum = 0;

  for (const num of nums) {
    if (num > 1) {
      positive.push(num);
    } else if (num === 1) {
      sum += 1;
    } else {
      negative.push(num);
    }
  }

  positive.sort((a, b) => b - a);
  negative.sort((a, b) => a - b);

  for (let i = 0; i < positive.length; i += 2) {
    if (i + 1 < positive.length) {
      sum += positive[i] * positive[i + 1];
    } else {
      sum += positive[i];
    }
  }

  for (let i = 0; i < negative.length; i += 2) {
    if (i + 1 < negative.length) {
      sum += negative[i] * negative[i + 1];
    } else {
      sum += negative[i];
    }
  }

  console.log(sum);
}

solve();