const fs = require('fs');

function solve() {
  const input = fs.readFileSync(0).toString().split('\n');
  const n = parseInt(input[0]);

  if (n === 0) {
    console.log(0);
    return;
  }

  const scores = [];
  for (let i = 1; i <= n; i++) {
    scores.push(parseInt(input[i]));
  }

  scores.sort((a, b) => a - b);

  const cut = Math.round(n * 0.15);

  const trimmedScores = scores.slice(cut, n - cut);

  if (trimmedScores.length === 0) {
    console.log(0);
    return;
  }

  const sum = trimmedScores.reduce((acc, curr) => acc + curr, 0);
  const average = Math.round(sum / trimmedScores.length);

  console.log(average);
}

solve();