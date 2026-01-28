const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
// const splitArray = input.split('');
// for(let i = 0; i < splitArray.length; i ++){
//     console.log(splitArray[i]);
// }
for(const char of input){
    console.log(char);
}