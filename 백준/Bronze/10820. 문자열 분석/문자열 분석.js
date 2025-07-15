const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  let lower = 0;
  let upper = 0;
  let number = 0;
  let space = 0;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char >= 'a' && char <= 'z') {
      lower++;
    } else if (char >= 'A' && char <= 'Z') {
      upper++;
    } else if (char >= '0' && char <= '9') {
      number++;
    } else if (char === ' ') {
      space++;
    }
  }
  console.log(`${lower} ${upper} ${number} ${space}`);
});