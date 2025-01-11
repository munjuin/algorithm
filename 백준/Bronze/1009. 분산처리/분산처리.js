const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input.shift('')*1;

input.map((v) => {
    const [a,b] = v.split(' ');
    let pow = 1
    for(let i = 0; i < b; i++) {
        pow = (pow * a) % 10;
    }
    console.log(pow === 0 ? 10 : pow);
});