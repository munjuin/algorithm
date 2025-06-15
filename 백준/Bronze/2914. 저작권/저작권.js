const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(input[0], 10);
const I = parseInt(input[1], 10);

const minMelodies = A * (I - 1) + 1;

console.log(minMelodies);