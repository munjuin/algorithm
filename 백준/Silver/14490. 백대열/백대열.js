const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [n, m] = line.split(':').map(Number);

  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

  const greatestCommonDivisor = gcd(n, m);
  console.log(`${n / greatestCommonDivisor}:${m / greatestCommonDivisor}`);

  rl.close();
}).on("close", () => {
  process.exit();
});
