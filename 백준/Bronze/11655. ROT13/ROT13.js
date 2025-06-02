const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let result = '';
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const charCode = char.charCodeAt(0);

    if (char >= 'A' && char <= 'Z') {
      let newCharCode = charCode + 13;
      if (newCharCode > 'Z'.charCodeAt(0)) {
        newCharCode = newCharCode - 26;
      }
      result += String.fromCharCode(newCharCode);
    } else if (char >= 'a' && char <= 'z') {
      let newCharCode = charCode + 13;
      if (newCharCode > 'z'.charCodeAt(0)) {
        newCharCode = newCharCode - 26;
      }
      result += String.fromCharCode(newCharCode);
    } else {
      result += char;
    }
  }
  console.log(result);
  rl.close();
});