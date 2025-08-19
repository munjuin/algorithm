const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false 
});
const VOWELS = 'aeiou';

function isVowel(char) {
  return VOWELS.includes(char);
}

function isAcceptable(password) {
  let hasVowel = false;
  let consecutiveVowels = 0;
  let consecutiveConsonants = 0;
    
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (isVowel(char)) {
      hasVowel = true;
      consecutiveVowels++;
      consecutiveConsonants = 0;
    } else {
      consecutiveVowels = 0;
      consecutiveConsonants++;
    }

    if (consecutiveVowels >= 3 || consecutiveConsonants >= 3) {
      return false;
    }

    if (i > 0) {
      const prevChar = password[i - 1];
      if (char === prevChar && char !== 'e' && char !== 'o') {
        return false;
      }
    }
  }

  return hasVowel;
}

rl.on('line', (line) => {
  if (line === 'end') {
    rl.close();
    return;
  }

  if (isAcceptable(line)) {
    console.log(`<${line}> is acceptable.`);
  } else {
    console.log(`<${line}> is not acceptable.`);
  }
});
