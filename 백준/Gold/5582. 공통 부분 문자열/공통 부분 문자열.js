const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', (line) => {
  input.push(line);
  if (input.length === 2) {
    rl.close();
  }
}).on('close', () => {
  const str1 = input[0];
  const str2 = input[1];

  const n = str1.length;
  const m = str2.length;
  
  let maxLength = 0;

  const dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
        }
      } 
    }
  }

  console.log(maxLength);

  process.exit();
});