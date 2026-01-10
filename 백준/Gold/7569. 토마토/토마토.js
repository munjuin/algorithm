const fs = require('fs');

function solve() {
    const input = fs.readFileSync(0).toString().split(/\s+/);
    let idx = 0;

    const M = parseInt(input[idx++]);
    const N = parseInt(input[idx++]);
    const H = parseInt(input[idx++]);

    const box = Array.from({ length: H }, () =>
        Array.from({ length: N }, () => new Int32Array(M))
    );

    const queue = [];
    let unripeCount = 0;

    for (let h = 0; h < H; h++) {
        for (let n = 0; n < N; n++) {
            for (let m = 0; m < M; m++) {
                const status = parseInt(input[idx++]);
                box[h][n][m] = status;
                if (status === 1) {
                    queue.push([h, n, m, 0]);
                } else if (status === 0) {
                    unripeCount++;
                }
            }
        }
    }

    if (unripeCount === 0) {
        console.log(0);
        return;
    }

    const dh = [1, -1, 0, 0, 0, 0];
    const dn = [0, 0, 1, -1, 0, 0];
    const dm = [0, 0, 0, 0, 1, -1];

    let head = 0; //
    let maxDays = 0;

    // 4. BFS 시작
    while (head < queue.length) {
        const [h, n, m, days] = queue[head++];
        maxDays = days;

        for (let i = 0; i < 6; i++) {
            const nh = h + dh[i];
            const nn = n + dn[i];
            const nm = m + dm[i];

            if (
                nh >= 0 && nh < H &&
                nn >= 0 && nn < N &&
                nm >= 0 && nm < M &&
                box[nh][nn][nm] === 0
            ) {
                box[nh][nn][nm] = 1;
                unripeCount--;
                queue.push([nh, nn, nm, days + 1]);
            }
        }
    }

    console.log(unripeCount === 0 ? maxDays : -1);
}

solve();