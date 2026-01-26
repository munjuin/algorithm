const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();// "4 5"
const inputSplit = input.split(' ');// ["4", "5"]
const [a, b] = inputSplit.map(Number);// [4, 5]
console.log(`a = ${a}\nb = ${b}`)

