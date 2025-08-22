const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  const N = parseInt(input[0]);

  for (let i = 1; i <= N; i++) {
    const name = input[i];
    console.log(name.toLowerCase());
  }

  process.exit();
});
