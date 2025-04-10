const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [N, K] = line.split(' ').map(Number);
  const result = binomialCoefficient(N, K, 10007);
  console.log(result);
  rl.close();
});

function binomialCoefficient(n, k, mod) {
  if (k < 0 || k > n) {
    return 0;
  }
  if (k === 0 || k === n) {
    return 1;
  }
  if (k > n / 2) {
    k = n - k;
  }

  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = (result * (n - i + 1)) % mod;
    result = (result * modInverse(i, mod)) % mod;
  }
  return result;
}

function modInverse(a, mod) {
  return power(a, mod - 2, mod);
}

function power(base, exp, mod) {
  let res = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) res = (res * base) % mod;
    base = (base * base) % mod;
    exp = Math.floor(exp / 2);
  }
  return res;
}