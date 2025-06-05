const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[this.getParentIndex(index)][0] > this.heap[index][0]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][0] < this.heap[smallerChildIndex][0]) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index][0] <= this.heap[smallerChildIndex][0]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function solve() {
    const [V, E] = input[0].split(' ').map(Number);
    const K = parseInt(input[1]);

    const graph = Array.from({ length: V + 1 }, () => []);
    for (let i = 2; i < E + 2; i++) {
        const [u, v, w] = input[i].split(' ').map(Number);
        graph[u].push({ node: v, weight: w });
    }

    const distances = Array(V + 1).fill(Infinity);
    distances[K] = 0;

    const pq = new MinHeap();
    pq.insert([0, K]);

    while (!pq.isEmpty()) {
        const [currentDist, currentNode] = pq.extractMin();

        if (currentDist > distances[currentNode]) {
            continue;
        }

        for (const { node: neighbor, weight } of graph[currentNode]) {
            const newDist = currentDist + weight;
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                pq.insert([newDist, neighbor]);
            }
        }
    }

    let result = "";
    for (let i = 1; i <= V; i++) {
        if (distances[i] === Infinity) {
            result += "INF\n";
        } else {
            result += distances[i] + "\n";
        }
    }
    console.log(result.trim());
}

solve();