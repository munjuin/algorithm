const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function reverseString(str) {
  return str.split('').reverse().join('');
}

const word = input;
const len = word.length;
const results = [];

for (let i = 1; i <= len - 2; i++) {
  for (let j = i + 1; j <= len - 1; j++) {
    const part1 = word.substring(0, i);
    const part2 = word.substring(i, j);
    const part3 = word.substring(j);
      
    const rev1 = reverseString(part1);
    const rev2 = reverseString(part2);
    const rev3 = reverseString(part3);

    results.push(rev1 + rev2 + rev3);
  }
}

results.sort();

console.log(results[0]);