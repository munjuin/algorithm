const fs = require('fs');
const S = fs.readFileSync('/dev/stdin').toString().trim();
const numbersArray = S.split(',');

console.log(numbersArray.length);