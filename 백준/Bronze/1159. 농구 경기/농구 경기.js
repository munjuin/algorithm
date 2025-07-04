const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const names = input.slice(1);

const firstLetterCounts = {};

for (const name of names) {
  const firstLetter = name[0];
  firstLetterCounts[firstLetter] = (firstLetterCounts[firstLetter] || 0) + 1;
}

const result = [];

for (const letter in firstLetterCounts) {
  if (firstLetterCounts[letter] >= 5) {
    result.push(letter);
  }
}

if (result.length === 0) {
  console.log("PREDAJA");
} else {
  console.log(result.sort().join(''));
}