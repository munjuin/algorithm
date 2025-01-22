const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();

const minusSplit = input.split('-');
const minusArr = [];
let answer = 0;
minusSplit.forEach(v => {
  const plusSplit = v.split('+');
  let sum = 0;
  plusSplit.forEach(v2 => {
    sum += Number(v2);
  })
  minusArr.push(sum);
})

answer = minusArr[0];
for (let i = 1; i < minusArr.length; i++) {
  answer -= minusArr[i];
}

console.log(answer);