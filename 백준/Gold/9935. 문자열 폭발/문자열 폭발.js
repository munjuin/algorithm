const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.trim())
const str = input[0]
const target = input[1];
const r_target = target.split('').reverse();
const last = target[target.length - 1];
const answer = [];

const check = () => {
  if (answer.length < target.length - 1) return false
  for (let i = 1; i < target.length; i++) {
    if (r_target[i] != answer[answer.length - i]) {
      return false;
    }
  }
  return true;
}


for (let i = 0; i < str.length; i++) {
  const now = str[i];
  if (now == last && check()) {
    for (let j = 0; j < target.length - 1; j++) {
      answer.pop();
    }
  } else {
    answer.push(now);
  }
}

if (answer.length == 0) {
  console.log('FRULA')
} else {
  console.log(answer.join(''))
}