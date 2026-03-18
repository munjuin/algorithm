function solution(arr, intervals) {
   
    [[a1, b1], [a2, b2]] = intervals;
    let a = arr.slice(a1, b1 + 1);
    let b = arr.slice(a2, b2 + 1);
    
    return a.concat(b);
    
    
}