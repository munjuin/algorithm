const fs = require('fs');
const X = +fs.readFileSync("./dev/stdin").toString().trim()

let memo = new Array(46).fill(null);
memo[0] = 0;
memo[1] = 1;
memo[2] = 1;

function pibo(N){
  if(memo[N]==null){
    memo[N] = pibo(N-1)+pibo(N-2);
    
  }
    return memo[N]
}

console.log(pibo(X))