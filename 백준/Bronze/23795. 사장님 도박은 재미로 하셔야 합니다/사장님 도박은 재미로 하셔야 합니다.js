const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let totalLoss = 0;
let lineCount = 0;

rl.on('line', (line) => {
  const bet = parseInt(line);

  if (bet === -1) {
    rl.close();
  } else {
    totalLoss += bet;
    lineCount++;

    if (lineCount >= 2000) {
      rl.close();
    }
  }
});

rl.on('close', () => {
  console.log(totalLoss);
  process.exit();
});
