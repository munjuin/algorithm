const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  solve();
  process.exit();
});

function solve() {
  const A = BigInt(input[0]);
  const operator = input[1];
  const B = BigInt(input[2]);

  let result;
  if (operator === '+') {
    result = A + B;
  } else if (operator === '*') {
    result = A * B;
  }
  console.log(result.toString());
}