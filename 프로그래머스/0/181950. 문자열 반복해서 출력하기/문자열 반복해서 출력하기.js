const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();// "string 5"
const [str, n] = input.split(' ');// str="string, n="5"
const repeatCount = Number(n);// 5

console.log(str.repeat(repeatCount));