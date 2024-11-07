const fs = require('fs');
const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = numbers.shift();

numbers.sort((a, b) => a - b).forEach(num => console.log(num));