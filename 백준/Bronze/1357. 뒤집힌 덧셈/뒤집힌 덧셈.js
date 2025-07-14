const fs = require('fs');
function reverseNumber(n) {
  const reversedString = String(n).split('').reverse().join('');
  return parseInt(reversedString, 10);
}
const [X, Y] = fs.readFileSync(0, 'utf8').trim().split(' ');
const revX = reverseNumber(X);
const revY = reverseNumber(Y);
const sum = revX + revY;
const finalAnswer = reverseNumber(sum);
console.log(finalAnswer);