const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
let recursionCount = 0;

const recursion = (s, l, r) => {
  recursionCount++;
  if (l >= r) {
    return 1;
  } else if (s[l] !== s[r]) {
    return 0;
  } else {
    return recursion(s, l + 1, r - 1);
  }
};

const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1);
};


for (let i = 1; i <= T; i++) {
  const S = input[i];
  recursionCount = 0;
  const isPal = isPalindrome(S);
  console.log(`${isPal} ${recursionCount}`);
}