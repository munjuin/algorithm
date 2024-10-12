const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.pop();
console.log(input.map(function solution(num) {
  const divisor = [1];
  for (let i=2; i < num; i++) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }
  if (divisor.reduce((acc, cur) => acc + cur, 0) === num) {
    return `${num} = ` + divisor.join(' + ');
  } else {
    return `${num} is NOT perfect.`;
  }
}).join('\n'));