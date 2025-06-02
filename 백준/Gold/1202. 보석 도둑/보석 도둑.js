class MaxHeap {
    constructor() {
        this.heap = [];
    }

    _getParentIndex(i) { return Math.floor((i - 1) / 2); }
    _getLeftChildIndex(i) { return 2 * i + 1; }
    _getRightChildIndex(i) { return 2 * i + 2; }

    _swap(i1, i2) {
        [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
    }

    insert(value) {
        this.heap.push(value);
        this._siftUp();
    }

    _siftUp() {
        let nodeIndex = this.heap.length - 1;
        while (nodeIndex > 0 && this.heap[nodeIndex] > this.heap[this._getParentIndex(nodeIndex)]) {
            this._swap(nodeIndex, this._getParentIndex(nodeIndex));
            nodeIndex = this._getParentIndex(nodeIndex);
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._siftDown();
        return max;
    }

    _siftDown() {
        let nodeIndex = 0;
        const length = this.heap.length;
        
        while (true) {
            let leftChildIndex = this._getLeftChildIndex(nodeIndex);
            let rightChildIndex = this._getRightChildIndex(nodeIndex);
            let largestIndex = nodeIndex;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if (largestIndex === nodeIndex) {
                break;
            }

            this._swap(nodeIndex, largestIndex);
            nodeIndex = largestIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }
}

function solve() {
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    let lineIdx = 0;

    const [N, K] = input[lineIdx++].split(' ').map(Number);

    const jewels = [];
    for (let i = 0; i < N; i++) {
        const [M, V] = input[lineIdx++].split(' ').map(Number);
        jewels.push({ M, V });
    }

    const bags = [];
    for (let i = 0; i < K; i++) {
        bags.push(Number(input[lineIdx++]));
    }

    jewels.sort((a, b) => a.M - b.M);

    bags.sort((a, b) => a - b);

    let totalValue = 0;
    const availableJewelsHeap = new MaxHeap(); 
    let jewelIdx = 0;

    for (let i = 0; i < K; i++) {
        const currentBagCapacity = bags[i];

        while (jewelIdx < N && jewels[jewelIdx].M <= currentBagCapacity) {
            availableJewelsHeap.insert(jewels[jewelIdx].V);
            jewelIdx++;
        }

        if (!availableJewelsHeap.isEmpty()) {
            totalValue += availableJewelsHeap.extractMax();
        }
    }

    console.log(totalValue);
}

solve();