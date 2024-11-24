function solution(lottos, win_nums) {
    let checkCount = 0;
    const zeroCount = lottos.filter((lotto) => lotto === 0).length;
    const resultMap = {
        '6': 1,
        '5': 2,
        '4': 3,
        '3': 4,
        '2': 5,
        '1': 6,
    };
    
    lottos.forEach((lotto) => {
        if (win_nums.includes(lotto)) {
            checkCount++;
        }
    });
    
    const maxCheckCount = checkCount + zeroCount;
    const minCheckCount = checkCount;

    let maxResult = resultMap[maxCheckCount] ?? 6;
    let minResult = resultMap[minCheckCount] ?? 6;
    
    return [maxResult, minResult];
}