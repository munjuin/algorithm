const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const lines = input.slice(1);
const result = lines.map(line => {
    return line[0].toUpperCase() + line.substring(1);
}).join('\n');

console.log(result);