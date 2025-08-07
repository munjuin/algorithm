const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [A, B] = input;
const minA = A.replaceAll('6', '5');
const minB = B.replaceAll('6', '5');
const maxA = A.replaceAll('5', '6');
const maxB = B.replaceAll('5', '6');
const minSum = parseInt(minA) + parseInt(minB);
const maxSum = parseInt(maxA) + parseInt(maxB);

console.log(minSum + " " + maxSum);