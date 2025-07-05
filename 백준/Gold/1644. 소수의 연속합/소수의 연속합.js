const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

const isPrime = new Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

const primes = [];
for (let i = 2; i <= N; i++) {
  if (isPrime[i]) {
    primes.push(i);
  }
}

let count = 0;
let sum = 0;
let start = 0;

for (let end = 0; end < primes.length; end++) {
  sum += primes[end];

  while (sum > N) {
    sum -= primes[start];
    start++;
  }
  if (sum === N) {
    count++;
  }
}

console.log(count);