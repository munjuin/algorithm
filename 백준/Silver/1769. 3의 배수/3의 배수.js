const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let X = input;
let count = 0;

while (X.length > 1) {
    count++;
    
    let sum = 0;
    
    for (let i = 0; i < X.length; i++) {
        sum += parseInt(X[i]);
    }

    X = sum.toString();
}

console.log(count);

const finalDigit = parseInt(X);

if (finalDigit % 3 === 0) {
    console.log("YES");
} else {
    console.log("NO");
}