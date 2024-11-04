const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [height, width] = input[0].split(' ').map(el => parseInt(el))
const originBoard = []
for(let i = 1; i <= height; i++) {
  let row = input[i].split('')
  originBoard.push(row)
}

const SIZE = {x:8, y:8}

function countNeedPainting(startRowNum, startColNum, startColor) {
  let nextColor = startColor;
  let count = 0;

  for(let i = startRowNum; i < startRowNum + SIZE.x; i++) {

    for(let j = startColNum; j < startColNum + SIZE.y; j++) {
      if(originBoard[i][j] !== nextColor) {
        count++;
      }
      nextColor = nextColor === 'B' ? 'W' : 'B'
    }
    nextColor = nextColor === 'B' ? 'W' : 'B'
  }
  return count;
}

let min = SIZE.x * SIZE.y;

for(let i = 0 ; i <= height - SIZE.x; i++) {
  for(let j = 0; j <= width - SIZE.y; j++) {
    const blakCount = countNeedPainting(i, j, 'B');
    const whiteCount = (SIZE.x * SIZE.y) - blakCount;
    const currentMin = blakCount > whiteCount ? whiteCount : blakCount
 
    if(min > currentMin) {
      min = currentMin
    }
  }
}
 
console.log(min)