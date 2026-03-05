function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        let minVal = Infinity;
        let found = false;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minVal) {
                minVal = arr[i];
                found = true;
            }
        }

        return found ? minVal : -1;
    });
}