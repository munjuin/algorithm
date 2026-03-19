function solution(names) {
    let result = [];
    for(let i = 0; i < names.length; i++){
        if(i % 5 === 0){
            result.push(names.slice(i)[0]);
        }
    }
    return result;
}