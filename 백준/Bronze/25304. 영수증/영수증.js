const fs = require('fs'); const inputData = fs.readFileSync(0,'utf8').toString().split('\n')
const TotalA = parseInt(inputData[0]); // 영수증에 적힌 총 금액
let caseNum = parseInt(inputData[1]); // 구매한 물건의 종류의 수
let sum = 0
for(let i = 2; i < caseNum+2 ; i++){
let data = inputData[i].split(' '); // 가격과 개수를 공백으로 나누어 줌.
let realS = parseInt(data[0]) * parseInt(data[1]) // realS = 가격(a)*개수(b)
sum += realS // realS이 누적되어 sum을 도출함.
}

if(sum === TotalA){
console.log("Yes")
} else {
console.log("No")
}