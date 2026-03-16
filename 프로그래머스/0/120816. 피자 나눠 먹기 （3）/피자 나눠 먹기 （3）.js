function solution(slice, n) {
    let pizza = 1;
    while((pizza * slice) / n < 1){
        pizza++;
    }
    return pizza;
}