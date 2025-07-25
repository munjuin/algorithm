const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const words = input.slice(1);

const filteredWords = words.filter(word => word.length >= M);

const wordCounts = {};
filteredWords.forEach(word => {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

const uniqueWords = [...new Set(filteredWords)];

uniqueWords.sort((a, b) => {
  const countA = wordCounts[a];
  const countB = wordCounts[b];

  if (countB !== countA) {
    return countB - countA;
  }

  if (b.length !== a.length) {
    return b.length - a.length;
  }

  return a.localeCompare(b);
});

console.log(uniqueWords.join('\n'));