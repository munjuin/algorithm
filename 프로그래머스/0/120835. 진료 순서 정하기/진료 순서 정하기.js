function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);
    const rankMap = {};
    sorted.forEach((v, i) => rankMap[v] = i + 1);
    return emergency.map(v => rankMap[v]);
}