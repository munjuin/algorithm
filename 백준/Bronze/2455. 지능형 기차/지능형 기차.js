const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let currentPeople = 0;
let maxPeople = 0;

for (let i = 0; i < 4; i++) {
  const [off, on] = input[i].split(' ').map(Number);

  currentPeople += on - off;

  if (currentPeople > maxPeople) {
    maxPeople = currentPeople;
  }
}

console.log(maxPeople);