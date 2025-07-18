const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function createPalindrome(name) {
  const counts = {};
  for (const char of name) {
    counts[char] = (counts[char] || 0) + 1;
  }

  const sortedChars = Object.keys(counts).sort();

  let oddCount = 0;
  let middleChar = '';

  for (const char of sortedChars) {
    if (counts[char] % 2 !== 0) {
      oddCount++;
      middleChar = char;
    }
  }

  if (oddCount > 1) {
    return "I'm Sorry Hansoo";
  }

  let front = '';
  for (const char of sortedChars) {
    const repeatCount = Math.floor(counts[char] / 2);
    front += char.repeat(repeatCount);
  }

  const back = front.split('').reverse().join('');

  return front + middleChar + back;
}

const result = createPalindrome(input);
console.log(result);