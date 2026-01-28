const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();// "4 5"
const splitString = input.split(' ');// ["4", "5"]
const [a, b] = splitString.map((item)=>Number(item))// [4, 5];

console.log(`${a} + ${b} = ${a + b}`)// 4 + 5 = 9