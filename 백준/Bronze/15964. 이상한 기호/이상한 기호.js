const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const [A, B] = line.split(' ').map(Number);
  
  // A@B = (A+B)×(A-B) 계산
  // 이는 A² - B² 과 같습니다.
  const result = (A + B) * (A - B);
  
  console.log(result);
  
  rl.close();
}).on('close', function() {
  process.exit();
});