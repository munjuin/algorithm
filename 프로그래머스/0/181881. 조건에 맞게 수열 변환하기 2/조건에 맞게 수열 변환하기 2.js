function solution(arr) {
    let x = 0;
    let currArr = arr;

    while (true) {
        const nextArr = currArr.map(val => {
            if (val >= 50 && val % 2 === 0) return val / 2;
            if (val < 50 && val % 2 !== 0) return val * 2 + 1;
            return val;
        });

        const isSame = currArr.every((val, idx) => val === nextArr[idx]);

        if (isSame) {
            return x;
        }

        currArr = nextArr;
        x++;
    }
}