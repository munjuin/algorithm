const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(x=>+x));

const own = input[1].sort((a,b)=>{return a-b});

const check = input[3];
const answer = [];

check.forEach(v=>{
  answer.push(binarySearch(own,v))
})

console.log(answer.join(' '))

function binarySearch(arr,target){
  let left = 0;
  let right = arr.length-1;
  
  while(left<=right){
    const mid = Math.floor((left+right)/2);
    if(arr[mid]==target){
      return 1;
    }else if(arr[mid]<target){
      left = mid+1;
    }else{
      right = mid-1;
    }
  }
  return 0;
}