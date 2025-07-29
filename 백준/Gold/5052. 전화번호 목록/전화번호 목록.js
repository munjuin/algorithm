const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solve();
  process.exit();
});

function solve() {
  let t = parseInt(input[0]);
  let currentIndex = 1;

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[currentIndex]);
    const phoneNumbers = input.slice(currentIndex + 1, currentIndex + 1 + n);
    
    if (isConsistent(phoneNumbers)) {
      console.log("YES");
    } else {
      console.log("NO");
    }
    
    currentIndex += n + 1;
  }
}

function isConsistent(phoneNumbers) {
  phoneNumbers.sort();
  
  for (let i = 0; i < phoneNumbers.length - 1; i++) {
    if (phoneNumbers[i+1].startsWith(phoneNumbers[i])) {
      return false; 
    }
  }
    return true; 
}