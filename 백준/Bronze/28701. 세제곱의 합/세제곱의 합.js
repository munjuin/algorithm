const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const n = parseInt(line);

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const sumOfCubes = sum * sum;

  let cubeSum = 0;
  for(let i = 1; i <= n; i++){
      cubeSum += Math.pow(i, 3);
  }
  

  console.log(sum);
  console.log(sumOfCubes);
  console.log(cubeSum);

  rl.close();
})
