const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  solve();
  process.exit();
});

function solve() {
  const n = parseInt(inputLines.shift(), 10);

  let output = [];

  for (let i = 0; i < n; i++) {
    const p = parseInt(inputLines.shift(), 10);

    let maxPrice = -1;
    let bestPlayer = '';

    for (let j = 0; j < p; j++) {
      const [priceStr, name] = inputLines.shift().split(' ');
      const price = parseInt(priceStr, 10);

      if (price > maxPrice) {
        maxPrice = price;
        bestPlayer = name;
      }
    }
    
    output.push(bestPlayer);
  }

  console.log(output.join('\n'));
}