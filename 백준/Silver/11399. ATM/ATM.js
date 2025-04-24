function minimumWaitingTime(N, P) {
    P.sort((a, b) => a - b);
    
    let totalWaitingTime = 0;
    let currentWaitingTime = 0;

    for (let i = 0; i < N; i++) {
        totalWaitingTime += currentWaitingTime;
        currentWaitingTime += P[i];
    }

    return totalWaitingTime + currentWaitingTime;
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const P = input[1].split(' ').map(Number);

console.log(minimumWaitingTime(N, P));
