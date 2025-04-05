const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const a = lines[0];
  const b = lines[1];

  function addLargeNumbers(a, b) {
    let maxLength = Math.max(a.length, b.length);
    let aPadded = a.padStart(maxLength, '0');
    let bPadded = b.padStart(maxLength, '0');

    let carry = 0;
    let result = '';

    for (let i = maxLength - 1; i >= 0; i--) {
      let digitA = parseInt(aPadded[i]);
      let digitB = parseInt(bPadded[i]);
      let sum = digitA + digitB + carry;

      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }

    if (carry > 0) {
      result = carry + result;
    }

    return result;
  }

  console.log(addLargeNumbers(a, b));
});