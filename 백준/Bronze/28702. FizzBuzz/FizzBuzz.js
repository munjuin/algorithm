const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let targetNum;

if (!isNaN(Number(input[2]))) {
    targetNum = Number(input[2]) + 1;
} else if (!isNaN(Number(input[1]))) {
    targetNum = Number(input[1]) + 2;
} else {
    targetNum = Number(input[0]) + 3;
}

const isFizz = targetNum % 3 === 0;
const isBuzz = targetNum % 5 === 0;

if (isFizz && isBuzz) {
    console.log("FizzBuzz");
} else if (isFizz) {
    console.log("Fizz");
} else if (isBuzz) {
    console.log("Buzz");
} else {
    console.log(targetNum);
}