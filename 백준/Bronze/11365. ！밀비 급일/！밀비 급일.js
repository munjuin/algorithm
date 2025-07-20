const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  if (line === 'END') {
    rl.close();
  } else {
    const reversed = line.split('').reverse().join('');
    console.log(reversed);
  }
}).on('close', function() {
  process.exit();
});