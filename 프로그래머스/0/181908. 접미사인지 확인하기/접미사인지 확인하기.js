function solution(my_string, is_suffix) {
    const leng = is_suffix.length;
    const tail = my_string.slice(-leng);
    if(tail === is_suffix){
        return 1;
    } else {
        return 0
    }
}