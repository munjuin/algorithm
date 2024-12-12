let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

let num = []; 
input.forEach((e)=>{
    num.push(Number(e));
})
 
let arr = []; 
for(let i = 1; i <= num[0]; i++){
    arr.push(i);
}
let result = "<";
for (let j = 0; j < num[0]; j++) {
    let i = num[1] - 1; 
    while (i-- > 0) { 
        let tmp = arr.shift(); 
        arr.push(tmp); 
    }
    result += arr.shift(); 
    if(arr.length == 0)
        result += ">";
    else
        result += ", ";
}
console.log(result);