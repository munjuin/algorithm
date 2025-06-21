const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const M = parseInt(input[1], 10);

const adj = [];
for (let i = 2; i < N + 2; i++) {
  adj.push(input[i].split(' ').map(Number));
}

const plan = input[N + 2].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) {
      adj[i][j] = 1;
    }
  }
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (adj[i][k] === 1 && adj[k][j] === 1) {
        adj[i][j] = 1;
      }
    }
  }
}

let isPossible = true;
for (let i = 0; i < M - 1; i++) {
  const startCityIndex = plan[i] - 1;
  const endCityIndex = plan[i + 1] - 1;

  if (adj[startCityIndex][endCityIndex] === 0) {
    isPossible = false;
  }
}

console.log(isPossible ? 'YES' : 'NO');