const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let S = input[0];
  let T = input[1];

  while (T.length > S.length) {
    if (T.endsWith('A')) {
      T = T.slice(0, -1);
    } else if (T.endsWith('B')) {
      T = T.slice(0, -1);
      T = T.split('').reverse().join('');
    } else {
      break;
    }
  }

  if (S === T) {
    console.log(1);
  } else {
    console.log(0);
  }

  process.exit();
});