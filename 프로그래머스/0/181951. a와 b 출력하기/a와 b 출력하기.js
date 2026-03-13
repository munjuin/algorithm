const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();// "4 5"
const split = input.split(' ');
const [a, b] = split.map(Number);
console.log(`a = ${a} \nb = ${b}`)