function solution(arr) {
    let x = 0;
    let currentArr = arr;
    
    while(true) {
        const nextArr = currentArr.map(val => {
            if (val >= 50 && val % 2 === 0) return val / 2;
            if (val < 50 && val % 2 !== 0) return val * 2 + 1;
            return val;
        });
        const isSame = currentArr.every((val, idx) => val === nextArr[idx]);
        
        if(isSame) {
            return x;
        }
        
        currentArr = nextArr;
        x++;
    }
}