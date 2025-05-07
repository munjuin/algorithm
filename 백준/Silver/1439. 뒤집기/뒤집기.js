const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const s = line.trim();

  if (s.length === 0) {
    console.log(0);
    rl.close();
    return;
  }

  let count0 = 0;
  let count1 = 0;

  if (s[0] === '0') {
    count0 = 1;
  } else {
    count1 = 1;
  }
    
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      if (s[i] === '0') {
        count0++;
      } else {
        count1++;
      }
    }
  }


  console.log(Math.min(count0, count1));

  rl.close();
});