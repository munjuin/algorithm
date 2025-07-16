const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const M = parseInt(input[1], 10);
const S = input[2];

let answer = 0;
let i = 0;

while (i < M) {
  if (S[i] === 'I') {
    let patternCount = 0;
    while (i + 2 < M && S[i + 1] === 'O' && S[i + 2] === 'I') {
      patternCount++;
      i += 2;
    }

    if (patternCount >= N) {
      answer += patternCount - N + 1;
    }
  }

  i++;
}

console.log(answer);