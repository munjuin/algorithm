const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(input[0], 10);

for (let i = 1; i <= T; i++) {
  const [pos, str] = input[i].split(' ');
  const index = parseInt(pos, 10) - 1;
  let strArray = str.split('');
    
  strArray.splice(index, 1);
    
  console.log(strArray.join(''));
}