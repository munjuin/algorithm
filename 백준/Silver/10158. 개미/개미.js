const fs = require('fs');

const input = fs.readFileSync(0).toString().split(/\s+/);

const w = parseInt(input[0]);
const h = parseInt(input[1]);
const p = parseInt(input[2]);
const q = parseInt(input[3]);
const t = parseInt(input[4]);

let x = (p + t) % (2 * w);
if (x > w) {
    x = 2 * w - x;
}

let y = (q + t) % (2 * h);
if (y > h) {
    y = 2 * h - y;
}

console.log(`${x} ${y}`);