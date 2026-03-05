function solution(arr, queries) {
    queries.forEach((query)=>{
        const [i, j] = query;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    })
    return arr;
}