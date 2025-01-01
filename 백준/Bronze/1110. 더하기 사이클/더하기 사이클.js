const fs = require("fs");

const input = require('fs').readFileSync('dev/stdin').toString().trim();


let result = Number(input);
let count = 0;

while (true) {
    let sum = Math.floor(result / 10) + result % 10;
    result = (result % 10) * 10 + sum % 10;
    count++;
    if (Number(input) === result) {
        break;
    }
}

console.log(count);