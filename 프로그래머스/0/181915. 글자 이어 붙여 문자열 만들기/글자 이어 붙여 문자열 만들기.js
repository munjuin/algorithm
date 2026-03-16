function solution(my_string, index_list) {
    let answer = '';
    const charArr = my_string.split('');
    for(const idx of index_list){
        answer += charArr[idx]
    }
    return answer
}