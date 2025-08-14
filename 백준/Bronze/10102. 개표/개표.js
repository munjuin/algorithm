const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const votes = input[1];

let countA = 0;
let countB = 0;

for (let i = 0; i < votes.length; i++) {
  if (votes[i] === 'A') {
    countA++;
  } else {
    countB++;
  }
}

if (countA > countB) {
  console.log('A');
} else if (countB > countA) {
  console.log('B');
} else {
  console.log('Tie');
}