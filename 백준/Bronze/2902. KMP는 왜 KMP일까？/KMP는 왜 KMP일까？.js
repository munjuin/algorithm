const fs = require('fs');
const longName = fs.readFileSync('/dev/stdin').toString().trim();
const nameParts = longName.split('-');
const initials = nameParts.map(part => part.charAt(0));
const shortName = initials.join('');
console.log(shortName);