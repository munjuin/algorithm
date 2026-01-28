const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const num = Number(input);
if(num % 2 === 0){
    console.log(`${num} is even`)
} else {
    console.log(`${num} is odd`)
}