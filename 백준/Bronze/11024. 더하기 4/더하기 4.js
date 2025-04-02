const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let T;
let lineCount = 0;

rl.on('line', (line) => {
  if (!T) {
    T = parseInt(line);
  } else {
    const numbers = line.split(' ').map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    lineCount++;

    if (lineCount === T) {
      rl.close();
    }
  }
});