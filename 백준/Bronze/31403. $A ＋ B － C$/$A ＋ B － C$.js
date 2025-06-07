const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  if (input.length === 3) {
    rl.close();
  }
}).on('close', function () {
  const A_str = input[0];
  const B_str = input[1];
  const C_str = input[2];


  const result1 = parseInt(A_str) + parseInt(B_str) - parseInt(C_str);


  const concatenated = A_str + B_str;
  const result2 = parseInt(concatenated) - parseInt(C_str);
  
  console.log(result1);
  console.log(result2);

  process.exit();
});