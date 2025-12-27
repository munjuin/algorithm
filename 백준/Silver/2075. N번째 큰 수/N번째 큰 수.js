const fs = require('fs');

function solve() {
    const BUF_SIZE = 65536;
    const buf = Buffer.alloc(BUF_SIZE);
    let bufLen = 0;
    let bufIdx = 0;
    let fd = 0;

    function nextChar() {
        if (bufIdx >= bufLen) {
            bufLen = fs.readSync(fd, buf, 0, BUF_SIZE);
            bufIdx = 0;
            if (bufLen === 0) return null;
        }
        return buf[bufIdx++];
    }

    function nextInt() {
        let char = nextChar();
        while (char !== null && (char < 48 || char > 57) && char !== 45) {
            char = nextChar();
        }
        if (char === null) return null;

        let neg = false;
        if (char === 45) {
            neg = true;
            char = nextChar();
        }

        let res = 0;
        while (char !== null && char >= 48 && char <= 57) {
            res = res * 10 + (char - 48);
            char = nextChar();
        }
        return neg ? -res : res;
    }

    const n = nextInt();
    if (n === null) return;

    const heap = new Int32Array(n);
    let heapSize = 0;

    function push(val) {
        heap[heapSize] = val;
        let cur = heapSize;
        while (cur > 0) {
            let parent = (cur - 1) >> 1;
            if (heap[parent] <= heap[cur]) break;
            let tmp = heap[parent];
            heap[parent] = heap[cur];
            heap[cur] = tmp;
            cur = parent;
        }
        heapSize++;
    }

    function replaceRoot(val) {
        heap[0] = val;
        let cur = 0;
        while (true) {
            let left = (cur << 1) + 1;
            let right = (cur << 1) + 2;
            let smallest = cur;

            if (left < n && heap[left] < heap[smallest]) smallest = left;
            if (right < n && heap[right] < heap[smallest]) smallest = right;

            if (smallest === cur) break;

            let tmp = heap[cur];
            heap[cur] = heap[smallest];
            heap[smallest] = tmp;
            cur = smallest;
        }
    }

    for (let i = 0; i < n * n; i++) {
        const num = nextInt();
        if (heapSize < n) {
            push(num);
        } else if (num > heap[0]) {
            replaceRoot(num);
        }
    }

    process.stdout.write(heap[0].toString() + '\n');
}

solve();