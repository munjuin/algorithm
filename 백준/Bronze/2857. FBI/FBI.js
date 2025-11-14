const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const fbiIndices = [];

input.forEach((line, index) => {
  if (line.includes('FBI')) {
    fbiIndices.push(index + 1);
  }
});

if (fbiIndices.length > 0) {
  console.log(fbiIndices.join(' '));
} else {
  console.log('HE GOT AWAY!');
}