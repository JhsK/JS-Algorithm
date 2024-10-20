function solution(array, commands) {
    const result = [];
    
    for (let [i, j, k] of commands) {
        let tmp = array.slice(i-1, j).sort((a, b) => a - b);
        result.push(tmp[k-1]);
    }
    
    return result;
}