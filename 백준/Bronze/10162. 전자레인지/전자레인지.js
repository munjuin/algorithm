const fs = require('fs');

let T = Number(fs.readFileSync('/dev/stdin').toString().trim());

const A = 300;
const B = 60;
const C = 10;

let countA = 0;
let countB = 0;
let countC = 0;

countA = Math.floor(T / A);
T %= A;

countB = Math.floor(T / B);
T %= B;

countC = Math.floor(T / C);
T %= C;

if (T !== 0) {
  console.log(-1);
} else {
  console.log(`${countA} ${countB} ${countC}`);
}