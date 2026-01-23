const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line)=>{
    input = line.split(' ');
    rl.close();
}).on('close', ()=>{
    console.log(`a = ${input[0]} \nb = ${input[1]}`)
})