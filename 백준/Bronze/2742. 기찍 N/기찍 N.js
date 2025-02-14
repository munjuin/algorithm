const input = require('fs').readFileSync('/dev/stdin').toString();

const num = Number(input);
let answer = '';

for(let i = num; i > 0; i--){
    answer += i + '\n';
}
console.log(answer);