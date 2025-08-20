const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const room = input.slice(1).map(line => line.split(''));

let horizontalSpaces = 0;
let verticalSpaces = 0;

for (let i = 0; i < N; i++) {
  let emptyCount = 0;
  for (let j = 0; j < N; j++) {
    if (room[i][j] === '.') {
      emptyCount++;
    } else {
      if (emptyCount >= 2) {
        horizontalSpaces++;
      }
      emptyCount = 0;
    }
  }
  if (emptyCount >= 2) {
    horizontalSpaces++;
  }
}

for (let j = 0; j < N; j++) {
  let emptyCount = 0;
  for (let i = 0; i < N; i++) {
    if (room[i][j] === '.') {
      emptyCount++;
    } else {
      if (emptyCount >= 2) {
        verticalSpaces++;
      }
      emptyCount = 0;
    }
  }
  if (emptyCount >= 2) {
    verticalSpaces++;
  }
}

console.log(horizontalSpaces, verticalSpaces);