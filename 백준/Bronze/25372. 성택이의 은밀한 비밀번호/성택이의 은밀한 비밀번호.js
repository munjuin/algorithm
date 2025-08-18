const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  const passwords = lines.slice(1);

  passwords.forEach(password => {
    const len = password.length;

    if (len >= 6 && len <= 9) {
      console.log('yes');
    } else {
      console.log('no');
    }
  });
  process.exit();
});
