const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const nStr of input) {
  if (!nStr) continue;
  const n = Number(nStr);
  
  let num = 1;
  let count = 1;
  while (true) {

    if (num % n === 0) {
      console.log(count);
      break;
    }

    num = (num * 10 + 1) % n;
    count++;
  }
}