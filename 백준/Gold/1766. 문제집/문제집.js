"use strict";

const fs = require("fs");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallest = index;

      if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function solve() {
  const input = fs.readFileSync(0).toString().split(/\s+/);
  let idx = 0;

  const N = parseInt(input[idx++]);
  const M = parseInt(input[idx++]);

  const adj = Array.from({ length: N + 1 }, () => []);
  const inDegree = new Array(N + 1).fill(0);

  for (let i = 0; i < M; i++) {
    const u = parseInt(input[idx++]);
    const v = parseInt(input[idx++]);
    adj[u].push(v);
    inDegree[v]++;
  }

  const pq = new MinHeap();
  const result = [];

  for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
      pq.push(i);
    }
  }

  while (pq.size() > 0) {
    const curr = pq.pop();
    result.push(curr);

    for (const next of adj[curr]) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
        pq.push(next);
      }
    }
  }

  console.log(result.join(" "));
}

solve();