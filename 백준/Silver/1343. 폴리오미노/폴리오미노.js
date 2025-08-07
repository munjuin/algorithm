const fs = require('fs');

let board = fs.readFileSync('/dev/stdin').toString().trim();

function solve() {
  board = board.replace(/XXXX/g, 'AAAA');
  board = board.replace(/XX/g, 'BB');
  if (board.includes('X')) {
    console.log(-1);
  } else {
    console.log(board);
  }
}

solve();