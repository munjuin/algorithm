const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
const cardSizes = [];

rl.on('line', (line) => {
    if (!N) {
        N = parseInt(line);
    } else {
        cardSizes.push(parseInt(line));
        if (cardSizes.length === N) {
            rl.close();
        }
    }
}).on('close', () => {
    const minHeap = new MinHeap();
    
    for (const size of cardSizes) {
        minHeap.insert(size);
    }

    let totalComparisons = 0;

    while (minHeap.size() > 1) {
        const first = minHeap.extractMin();
        const second = minHeap.extractMin();
        const combined = first + second;
        totalComparisons += combined;
        minHeap.insert(combined);
    }

    console.log(totalComparisons);
});

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}
