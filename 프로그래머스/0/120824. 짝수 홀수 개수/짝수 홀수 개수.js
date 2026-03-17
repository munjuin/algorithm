function solution(num_list) {
    let arr = [0, 0];
    for(const n of num_list){
        if(n % 2 ===0){
            arr[0]++;
        } else {
            arr[1]++;
        }
    }
    return arr;
}