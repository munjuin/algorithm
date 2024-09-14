let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

let arr = input.trim().split(' '); 
let cnt = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== '') {
    cnt++;
  }
}

console.log(cnt);