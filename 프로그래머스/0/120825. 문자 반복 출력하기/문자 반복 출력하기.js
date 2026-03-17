function solution(my_string, n) {
    let result = '';
    for(let src of my_string){
        result += src.repeat(n);
    }
    return result;
}