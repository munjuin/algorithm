const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const [K, N, M] = line.split(' ').map(Number);

  const totalCost = K * N;

  const moneyNeeded = totalCost - M;

  if (moneyNeeded > 0) {
    console.log(moneyNeeded);
  } else {
    console.log(0);
  }

  rl.close();
}).on('close', function() {
  process.exit();
});