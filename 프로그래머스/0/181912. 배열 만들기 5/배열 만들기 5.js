function solution(intStrs, k, s, l) {
    const result = [];
    for(const str of intStrs){
        const sub = str.slice(s, s + l)
        const num = Number(sub);
        if(num > k){
            result.push(num);
        }
    }
    return result;
}