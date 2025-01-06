const input = require('fs').readFileSync('/dev/stdin').toString();

let count = 0;

for (let i = 1; i <= input; i++) {
  count++;
  if (i == 99) {
    break;
  }
}

for (let i = 100; i <= input; i++) {

  let strInput = i.toString().split('');

    if (strInput[0] - strInput[1] == strInput[1] - strInput[2]) {
      count++;
    }

}

console.log(count);