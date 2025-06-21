const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

function solve(str) {
  const stack = [];
  let answer = 0;
  let temp = 1;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '(') {
      temp *= 2;
      stack.push(char);
    } else if (char === '[') {
      temp *= 3;
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0 || stack[stack.length - 1] !== '(') {
        return 0;
      }
      if (str[i - 1] === '(') {
        answer += temp;
      }
      stack.pop();
      temp /= 2;
    } else if (char === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== '[') {
        return 0;
      }
      if (str[i - 1] === '[') {
        answer += temp;
      }
      stack.pop();
      temp /= 3;
    }
  }

  if (stack.length !== 0) {
    return 0;
  }

  return answer;
}

const result = solve(input);
console.log(result);