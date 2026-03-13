function solution(l, r) {
    const result = []
    for(let i = l; i <= r; i ++){
        const str = String(i);
        if(/^[05]+$/.test(str)){
           result.push(i);
           }
    }
    return result.length === 0 ? [-1] : result;
}