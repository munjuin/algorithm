const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
 
const N = parseInt(input)
 
let M = 0
for(let i = 0; i < N; i++) {
  let sum = 0;
  const candidateValue = i;
  const stringValue = candidateValue.toString()
 
  for(let j = 0; j < stringValue.length; j++) {
    sum += parseInt(stringValue[j])
  }
 
  sum += candidateValue;
 
  if(sum == N) {
    M = candidateValue
    break;
  }
}
 
console.log(M)
