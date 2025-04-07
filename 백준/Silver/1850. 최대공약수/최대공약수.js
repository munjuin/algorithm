const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

function gcd(a, b) {
    if (b === 0n) {
        return a;
    }
    return gcd(b, a % b);
}

const ones = gcd(a, b);

let result = '';
for (let i = 0n; i < ones; i++) {
    result += '1';
}

console.log(result);
