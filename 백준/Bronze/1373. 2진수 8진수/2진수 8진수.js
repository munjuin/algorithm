const fs = require('fs');
const binaryString = fs.readFileSync(0, 'utf8').trim();
const octalString = BigInt('0b' + binaryString).toString(8);
console.log(octalString);