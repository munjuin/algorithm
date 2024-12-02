let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

const N = Number(input);

let cnt = 0;

for(let i=1; i*i <= N; i++){
cnt++;
}

console.log(cnt);