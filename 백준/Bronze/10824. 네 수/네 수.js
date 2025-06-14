const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = input[0];
const B = input[1];
const C = input[2];
const D = input[3];

const num1 = BigInt(A + B);
const num2 = BigInt(C + D);

console.log((num1 + num2).toString());