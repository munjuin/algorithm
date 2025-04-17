const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  if (line === '0') {
    rl.close();
  } else {
    let numStr = line;
    while (numStr.length > 1) {
      let sum = 0;
      for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
      }
      numStr = sum.toString();
    }
    console.log(numStr);
  }
});