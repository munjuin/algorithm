const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const result = input.replace(/[CAMBRIDGE]/g, '');
console.log(result);