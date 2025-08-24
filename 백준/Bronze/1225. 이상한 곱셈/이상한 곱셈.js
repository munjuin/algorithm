const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = input[0];
const B = input[1];

const sumA = A.split('').reduce((acc, cur) => acc + Number(cur), 0);
const sumB = B.split('').reduce((acc, cur) => acc + Number(cur), 0);

console.log(sumA * sumB);
