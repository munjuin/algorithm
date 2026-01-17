const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

const N = parseInt(input[0]);
const sizes = input.slice(1, 7).map(Number);
const T = parseInt(input[7]);
const P = parseInt(input[8]);


let totalTshirtBundles = 0;
sizes.forEach(size => {
    totalTshirtBundles += Math.ceil(size / T);
});

const penBundles = Math.floor(N / P);
const penRemainders = N % P;

console.log(totalTshirtBundles);
console.log(`${penBundles} ${penRemainders}`);