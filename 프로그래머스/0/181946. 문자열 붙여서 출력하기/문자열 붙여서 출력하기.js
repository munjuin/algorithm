const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [str1, str2] = input.split(' ')
console.log(str1+str2)