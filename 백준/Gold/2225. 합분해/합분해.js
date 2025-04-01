const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [N, K] = line.split(' ').map(Number);

  const dp = Array(N + 1).fill(null).map(() => Array(K + 1).fill(0));

  dp[0][0] = 1;

  for (let i = 0; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
      for (let k = 0; k <= i; k++) {
        dp[i][j] = (dp[i][j] + dp[i - k][j - 1]) % 1000000000;
      }
    }
  }

  console.log(dp[N][K]);
  rl.close();
});