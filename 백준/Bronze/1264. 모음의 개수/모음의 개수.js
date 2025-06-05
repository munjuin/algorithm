const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const vowels = ['a', 'e', 'i', 'o', 'u'];

rl.on('line', (line) => {
  if (line === '#') {
    rl.close();
    return;
  }

  let count = 0;
  for (let i = 0; i < line.length; i++) {
    const char = line[i].toLowerCase();
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count);
});