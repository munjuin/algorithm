const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0, 'utf8').split(/\s+/);
    const N = parseInt(input[0]);
    if (isNaN(N)) return;

    const numbers = [];
    for (let i = 1; i <= N; i++) {
        numbers.push(Number(input[i]));
    }

    numbers.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < N; i++) {
        const target = numbers[i];
        let left = 0;
        let right = N - 1;

        while (left < right) {
            const sum = numbers[left] + numbers[right];

            if (sum === target) {
                if (left === i) {
                    left++;
                } else if (right === i) {
                    right--;
                } else {
                    count++;
                    break; 
                }
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    console.log(count);
}

solve();