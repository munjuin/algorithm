let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

input = Number(input[0]);

function solution(input) {
    if (!input || input === 1) return 1;
    return input * solution(input - 1);
}

console.log(solution(input));