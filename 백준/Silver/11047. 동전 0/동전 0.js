const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N, K] = input.shift().split(' ').map(Number);
const coins = input.map(Number);
let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
  cnt += Math.floor(K / coins[i]);
  K %= coins[i];
}
console.log(cnt);