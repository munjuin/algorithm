let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const testCase = Number(input.shift());
let M, N, K, graph;

const dfs = (x, y) => {
  const stack = [[x, y]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (stack.length) {
    const [curX, curY] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny]) {
        stack.push([nx, ny]);
        graph[nx][ny] = 0;
      }
    }
  }
};

const howManyWorms = () => {
  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j]) {
        answer++;
        dfs(i, j);
      }
    }
  }
  console.log(answer);
};

for (let i = 0; i < testCase; i++) {

  [M, N, K] = input.shift().split(' ').map(Number);

  graph = Array.from(Array(N), () => Array(M).fill(0));

  for (let j = 0; j < K; j++) {
    const [x, y] = input[j].split(' ').map(Number);
    graph[y][x] = 1;
  }

  howManyWorms();

  input = input.slice(K);
}