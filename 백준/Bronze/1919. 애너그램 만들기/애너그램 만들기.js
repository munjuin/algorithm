const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const word1 = input[0];
const word2 = input[1];
function getCharCounts(word) {
  const counts = new Array(26).fill(0);

  for (let i = 0; i < word.length; i++) {
    const charCodeIndex = word.charCodeAt(i) - 'a'.charCodeAt(0);
    counts[charCodeIndex]++;
  }
  
  return counts;
}
const counts1 = getCharCounts(word1);
const counts2 = getCharCounts(word2);
let removals = 0;
for (let i = 0; i < 26; i++) {
  const diff = Math.abs(counts1[i] - counts2[i]);
  removals += diff;
}

console.log(removals);