const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const document = input[0];
const word = input[1];

let count = 0;
let startIndex = 0;

while (true) {

  const foundIndex = document.indexOf(word, startIndex);

  if (foundIndex === -1) {
    break;
  }

  count++;

  startIndex = foundIndex + word.length;
}
console.log(count);