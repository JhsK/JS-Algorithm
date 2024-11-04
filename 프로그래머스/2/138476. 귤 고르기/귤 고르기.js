function solution(k, tangerine) {
    let result = 0;
    let hashTable = {};
    
    for (let x of tangerine) {
        if (hashTable[x]) {
            hashTable[x] += 1;
        } else {
            hashTable[x] = 1;
        }
    }
    
    const list = Object.entries(hashTable).sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < list.length; i++) {
        result += 1;
        k = k - list[i][1];
        if (k <= 0) return result;
    }
    
    return result;
}