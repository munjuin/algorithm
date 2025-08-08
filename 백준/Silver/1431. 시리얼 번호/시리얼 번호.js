const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const serialNumbers = input.slice(1);

function getSumOfDigits(str) {
  let sum = 0;
  for (const char of str) {
    if (!isNaN(parseInt(char))) {
      sum += parseInt(char);
    }
  }
  return sum;
}
serialNumbers.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  const sumA = getSumOfDigits(a);
  const sumB = getSumOfDigits(b);

  if (sumA !== sumB) {
    return sumA - sumB;
  }
  return a.localeCompare(b);
});

console.log(serialNumbers.join('\n'));