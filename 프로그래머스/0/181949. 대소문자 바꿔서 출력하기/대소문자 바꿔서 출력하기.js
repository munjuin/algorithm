const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();// "aBcDeFg"
const result = input.split('').map((alphabet)=>{
    if(alphabet === alphabet.toUpperCase()){
        return alphabet.toLowerCase();
    } else {
        return alphabet.toUpperCase();
    }
}).join("");

console.log(result);