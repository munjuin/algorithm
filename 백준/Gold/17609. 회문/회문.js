const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10);
const strings = input.slice(1);

const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const solve = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      const checkLeftRemoval = isPalindrome(str, left + 1, right);
      const checkRightRemoval = isPalindrome(str, left, right - 1);

      if (checkLeftRemoval || checkRightRemoval) {
        return 1;
      } else {
        return 2;
      }
    }
  }

  return 0;
};

const results = [];
for (const str of strings) {
  results.push(solve(str));
}

console.log(results.join('\n'));