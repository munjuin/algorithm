const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

input = input.map((item)=>Number(item));

let max = Math.max(...input);

let sum = input.reduce((acc, currentValue)=> acc + currentValue, 0);

if((sum - max) > max){
    console.log(sum);
} else{
    console.log((sum - max) * 2 - 1);
}