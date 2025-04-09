const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [N, T, C, P] = line.split(' ').map(Number);

  const harvestDays = Math.floor((N - 1) / T);
  const totalStarfruits = harvestDays * C;
  const totalProfit = totalStarfruits * P;

  console.log(totalProfit);

  rl.close();
});