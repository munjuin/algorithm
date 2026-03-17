function solution(my_string, is_prefix) {
    const prefixes = [];
    
    for(let i = 1; i <= my_string.length; i++){
        prefixes.push(my_string.slice(0, i));
    }
    return prefixes.includes(is_prefix)? 1 : 0;
}