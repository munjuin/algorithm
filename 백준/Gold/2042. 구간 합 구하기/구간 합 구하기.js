const fs = require('fs');

function solve() {
  const input = fs.readFileSync(0).toString().trim().split(/\s+/);
  let cursor = 0;

  const N = parseInt(input[cursor++]);
  const M = parseInt(input[cursor++]);
  const K = parseInt(input[cursor++]);

  const nums = new BigInt64Array(N);
  for (let i = 0; i < N; i++) {
    nums[i] = BigInt(input[cursor++]);
  }

  const tree = new BigInt64Array(N * 4);

  function init(node, start, end) {
    if (start === end) {
      return (tree[node] = nums[start]);
    }
    const mid = Math.floor((start + end) / 2);
    return (tree[node] = init(node * 2, start, mid) + init(node * 2 + 1, mid + 1, end));
  }

  function update(node, start, end, index, diff) {
    if (index < start || index > end) return;
    tree[node] += diff;
    if (start !== end) {
      const mid = Math.floor((start + end) / 2);
      update(node * 2, start, mid, index, diff);
      update(node * 2 + 1, mid + 1, end, index, diff);
    }
  }

  function sum(node, start, end, left, right) {
    if (left > end || right < start) return 0n;
    if (left <= start && end <= right) return tree[node];
    const mid = Math.floor((start + end) / 2);
    return sum(node * 2, start, mid, left, right) + sum(node * 2 + 1, mid + 1, end, left, right);
  }

  init(1, 0, N - 1);

  const results = [];
  const totalQueries = M + K;
  for (let i = 0; i < totalQueries; i++) {
    const a = parseInt(input[cursor++]);
    const b = parseInt(input[cursor++]);
    const c = input[cursor++];

    if (a === 1) {
      const targetIdx = b - 1;
      const newValue = BigInt(c);
      const diff = newValue - nums[targetIdx];
      nums[targetIdx] = newValue;
      update(1, 0, N - 1, targetIdx, diff);
    } else {
      const left = b - 1;
      const right = parseInt(c) - 1;
      results.push(sum(1, 0, N - 1, left, right).toString());
    }
  }

  process.stdout.write(results.join('\n') + '\n');
}

solve();