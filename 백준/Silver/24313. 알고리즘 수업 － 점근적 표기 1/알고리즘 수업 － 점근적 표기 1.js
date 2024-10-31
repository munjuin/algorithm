const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [aList, c, n0] = fs.readFileSync(filePath).toString().trim().split('\n');
const [a1, a0] = aList
  .trim()
  .split(' ')
  .map((item) => +item);

console.log(solution(a1, a0, +c, +n0));

function solution(a1, a0, c, n0) {
  const fn = a1 * n0 + a0;
  const gn = c * n0;

  return fn <= gn && a1 - c <= 0 ? 1 : 0;
}