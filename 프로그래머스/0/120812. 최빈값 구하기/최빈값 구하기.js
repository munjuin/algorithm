function solution(array) {
    const freqMap = new Map();
    let maxFreq = 0;
    let mode = -1;
    let isDuplicate = false;

    for (const num of array) {
        const count = (freqMap.get(num) || 0) + 1;
        freqMap.set(num, count);

        if (count > maxFreq) {
            maxFreq = count;
            mode = num;
            isDuplicate = false;
        } else if (count === maxFreq) {
            isDuplicate = true;
        }
    }

    // 3. 중복 여부에 따른 최종 결과 반환
    return isDuplicate ? -1 : mode;
}