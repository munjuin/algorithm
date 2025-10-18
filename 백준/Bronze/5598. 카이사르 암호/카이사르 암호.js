const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const caesarWord = line;
  
  let originalWord = '';

  for (let i = 0; i < caesarWord.length; i++) {
    const charCode = caesarWord.charCodeAt(i);

    let originalCharCode = charCode - 3;

    if (originalCharCode < 'A'.charCodeAt(0)) {
      originalCharCode += 26;
    }
    
    originalWord += String.fromCharCode(originalCharCode);
  }

  console.log(originalWord);
  
  rl.close();
});

rl.on('close', () => {
  process.exit();
});
