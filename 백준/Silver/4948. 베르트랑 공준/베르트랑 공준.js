const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map((x) => Number(x));

for(let i = 0; i < input.length - 1; i++){
  const num = input[i];
  let count = 0;

  if(num === 1){
    count++;
    console.log(count);

    continue;
  }

  outer: for(let j = num + 1; j <= 2*num; j++){
    inner: for(let k = 2; k*k <= j; k++){
      if(j % k === 0){
        continue outer;
      }
    }
    
    count++;
  }
  
  console.log(count);
}