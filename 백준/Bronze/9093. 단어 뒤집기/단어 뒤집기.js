const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const T = parseInt(input[0]);

  for (let i = 1; i <= T; i++) {
    const sentence = input[i];
    
    const words = sentence.split(' ');

    const reversedWords = words.map(word => {
      return word.split('').reverse().join('');
    });
      
    const result = reversedWords.join(' ');

    console.log(result);
  }

  process.exit();
});