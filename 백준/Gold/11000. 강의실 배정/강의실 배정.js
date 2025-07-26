const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10);
const classes = input.slice(1).map(line => line.split(' ').map(Number));

function solve() {
  const events = [];
  for (const [start, end] of classes) {
    events.push({ time: start, type: 1 });
    events.push({ time: end, type: -1 });
  }

  events.sort((a, b) => {
    if (a.time !== b.time) {
      return a.time - b.time;
    }
    return a.type - b.type;
  });

  let maxRooms = 0;
  let currentRooms = 0;

  for (const event of events) {
    currentRooms += event.type;
    maxRooms = Math.max(maxRooms, currentRooms);
  }

  console.log(maxRooms);
}

solve();