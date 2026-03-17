function solution(my_string, indices) {
    const indexSet = new Set(indices);
    return [...my_string].filter((_, i) => !indexSet.has(i)).join('');
}