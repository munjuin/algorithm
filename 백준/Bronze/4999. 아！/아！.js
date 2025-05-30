const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
}).on('close', () => {
  const jaehwanCanSay = input[0];
  const doctorRequires = input[1];

  if (jaehwanCanSay.length >= doctorRequires.length) {
    console.log("go");
  } else {
    console.log("no");
  }
  process.exit(0);
});