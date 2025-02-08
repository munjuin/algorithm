const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' ').map(x=>+x));
input.pop();
const answer = []; 

input.forEach(v=>{
  let result = [];
  if(answer.length>0) answer.push([])
  const N = +v.shift();
  for(let i =0; i<1<<N; i++){
     if(countBits(i)==6){
       let temp = [];
       let value = i;
      for(let j = 0; j<N; j++){
        if((value&1)==1) temp.push(v[j]);
        value = value>>1;
      }
      result.push(temp)
     }
  }
  answer.push(sortSix(result))
})


function countBits(value){ 
  let count  = 0; 
  while(value>0){ 
    if((value&1)==1) count++; 
    value = value>>1; 
  }
  return count; 
}

console.log(answer.join('\n'))

function sortSix(arr){
  return arr.sort((a,b)=>{
    if(a[0]>b[0]){
      return 1
    }else if(a[0]<b[0]){
      return -1
    }else{
      if(a[1]>b[1]){
        return 1
      }else if(a[1]<b[1]){
        return -1
      }else{
        if(a[2]>b[2]){
          return 1
        }else if(a[2]<b[2]){
          return -1
        }else{
          if(a[3]>b[3]){
            return 1
          }else if(a[3]<b[3]){
            return -1
          }else{
            if(a[4]>b[4]){
              return 1
            }else if(a[4]<b[4]){
              return -1
            }else{
              if(a[5]>b[5]){
                return 1
              }else if(a[5]<b[5]){
                return -1
              }
            }
          }
        }
      }
    }
  }).map(v=>v.join(' ')).join('\n')
}