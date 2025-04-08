function countPairs(N) {
    let count = 0;

    for (let A = 1; A <= 500; A++) {
        for (let B = 1; B <= A; B++) {
            if (A * A === B * B + N) {
                count++;
            }
        }
    }

    return count;
}

const N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
const result = countPairs(N);
console.log(result);