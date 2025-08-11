const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const T = input[0];
const P = input[1];

const getPi = (pattern) => {
  const m = pattern.length;
  const pi = new Array(m).fill(0);
  let j = 0;
  for (let i = 1; i < m; i++) {
    while (j > 0 && pattern[i] !== pattern[j]) {
      j = pi[j - 1];
    }
    if (pattern[i] === pattern[j]) {
      j++;
    }
    pi[i] = j;
  }
  return pi;
};

const kmpSearch = (text, pattern) => {
  const n = text.length;
  const m = pattern.length;
  
  if (n < m) {
    return [];
  }

  const pi = getPi(pattern);
  const result = [];
  let j = 0;

  for (let i = 0; i < n; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = pi[j - 1];
    }
    if (text[i] === pattern[j]) {
      if (j === m - 1) {
        result.push(i - m + 2);
        j = pi[j];
      } else {
        j++;
      }
    }
  }
  return result;
};

const positions = kmpSearch(T, P);

console.log(positions.length);
if (positions.length > 0) {
  console.log(positions.join(' '));
}