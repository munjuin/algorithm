const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0], 10);
const results = [];

function getSortedString(str) {
  return str.split('').sort().join('');
}

for (let i = 1; i <= N; i++) {
  const [str1, str2] = input[i].split(' ');
  const sortedStr1 = getSortedString(str1);
  const sortedStr2 = getSortedString(str2);

  if (sortedStr1 === sortedStr2) {
    results.push("Possible");
  } else {
    results.push("Impossible");
  }
}

console.log(results.join('\n'));