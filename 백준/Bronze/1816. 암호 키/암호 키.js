const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(BigInt);
const n = parseInt(input.shift(), 10);

for (let index = 0; index < n; index++) {
    const tc = input[index];
    const limit = 1000000n;

    let isAppropriate = true;
    for (let i = 2n; i * i <= tc && i <= limit; i++) { // 제곱근까지만 확인
        if (tc % i === 0n) {
            console.log("NO");
            isAppropriate = false;
            break;
        }
    }

    if (isAppropriate) {
        console.log("YES");
    }
}