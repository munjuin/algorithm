const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();// "4 5"
const splitString = input.split(' ');// ["4", "5"]
const numbering = splitString.map((item)=>Number(item))// [4, 5];

console.log(`${numbering[0]} + ${numbering[1]} = ${numbering[0] + numbering[1]}`)// 4 + 5 = 9