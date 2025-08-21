const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, M] = input[0].split(' ').map(Number);

  for (let i = 1; i <= N; i++) {
    const row = input[i];
    const reversedRow = row.split('').reverse().join('');
    console.log(reversedRow);
  }

  process.exit();
});