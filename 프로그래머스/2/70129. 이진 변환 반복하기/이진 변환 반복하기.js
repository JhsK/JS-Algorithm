function solution(s) {
    let str = s;
    let removeZeroCnt = 0;
    let transferCnt = 0;
    
    while (str !== '1') {
        const preLength = str.length;
        const removeZeroStrLength = str.replaceAll('0', '').length;
        removeZeroCnt += (preLength - removeZeroStrLength);
        str = removeZeroStrLength.toString(2);
        transferCnt += 1;
    }
    
    return [transferCnt, removeZeroCnt];
}