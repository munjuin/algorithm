const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
})
.on('close', function () {
  const N = parseInt(input[0]);

  for (let i = 1; i <= N; i++) {
    console.log(`${i}. ${input[i]}`);
  }
  process.exit();
});
