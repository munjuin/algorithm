const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const vowels = 'aeiou';
  let count = 0;
  for (let i = 0; i < line.length; i++) {
    if (vowels.includes(line[i])) {
      count++;
    }
  }

  console.log(count);
  rl.close();
}).on('close', function() {
  process.exit();
});