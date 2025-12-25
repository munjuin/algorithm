const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ');

const N = BigInt(input[0]);
const M = BigInt(input[1]);

const result = (N * M) / 2n;

console.log(result.toString());