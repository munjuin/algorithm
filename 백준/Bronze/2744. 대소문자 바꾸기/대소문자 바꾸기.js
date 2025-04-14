const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char >= 'a' && char <= 'z') {
      result += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  console.log(result);
  rl.close();
});