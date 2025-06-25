const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sequence = [];
let currentNumber = 1;

while (sequence.length < B) {
    for (let i = 0; i < currentNumber; i++) {
        if (sequence.length < B) {
            sequence.push(currentNumber);
        } else {
            break;
        }
    }
    currentNumber++;
}

const sum = sequence.slice(A - 1, B).reduce((acc, val) => acc + val, 0);

console.log(sum);