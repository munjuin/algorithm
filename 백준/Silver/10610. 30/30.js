const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const n = line.trim();
  const digits = n.split('').map(Number);

  if (!digits.includes(0)) {
    console.log(-1);
  } else {
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
    if (sum % 3 !== 0) {
      console.log(-1);
    } else {
      digits.sort((a, b) => b - a);
      console.log(digits.join(''));
    }
  }

  rl.close();
}).on("close", () => {
  process.exit();
});