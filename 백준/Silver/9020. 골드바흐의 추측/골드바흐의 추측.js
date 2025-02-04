const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => +v);
input.shift();
const MAX = Math.max(...input);
const answer = [];
let prime = new Array(MAX + 1).fill(true);
prime[0] = false;
prime[1] = false;

// 소수 배열 생성
for (let i = 2; i * i <= MAX; i++) {
  if (prime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      prime[j] = false;
    }
  }
}

input.forEach(v => {
  for (let i = Math.floor(v / 2); i >= 2; i--) {
    if (prime[i] && prime[v - i]) {
      answer.push(`${i} ${v - i}`);
      break;
    }
  }
})

console.log(answer.join('\n'));