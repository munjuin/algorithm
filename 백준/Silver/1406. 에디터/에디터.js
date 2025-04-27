const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [initialString, m, ...commands] = input;
m = Number(m);

const left = initialString.split('');
const right = [];

for (let i = 0; i < m; i++) {
  const [command, value] = commands[i].split(' ');

  if (command === 'L') {
    if (left.length) {
      right.push(left.pop());
    }
  } else if (command === 'D') {
    if (right.length) {
      left.push(right.pop());
    }
  } else if (command === 'B') {
    if (left.length) {
      left.pop();
    }
  } else if (command === 'P') {
    left.push(value);
  }
}

console.log(left.concat(right.reverse()).join(''));