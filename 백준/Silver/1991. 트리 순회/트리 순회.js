const [N, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const nodes = input.map(v => v.split(' '));
const trees = nodes.reduce((acc, [node, left, right]) => {
    acc[node] = { left, right };
    return acc;
}, {});

const traversePreOrder = (node) => {
    if (node === '.') {
        return '';
    }
    const { left, right } = trees[node];
    return node + traversePreOrder(left) + traversePreOrder(right);
};

const traverseInOrder = (node) => {
    if (node === '.') {
        return '';
    }
    const { left, right } = trees[node];
    return traverseInOrder(left) + node + traverseInOrder(right);
};

const traversePostOrder = (node) => {
    if (node === '.') {
        return '';
    }
    const { left, right } = trees[node];
    return traversePostOrder(left) + traversePostOrder(right) + node;
};

console.log(traversePreOrder('A'));
console.log(traverseInOrder('A'));
console.log(traversePostOrder('A'));