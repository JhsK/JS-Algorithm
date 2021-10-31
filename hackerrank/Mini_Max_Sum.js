function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let maxArr = Number.MIN_SAFE_INTEGER;
    let minArr = Number.MAX_SAFE_INTEGER;
    let max = 0;
    let min = 0;
    
    for (let i = 0; i < arr.length; i++) {
        maxArr = Math.max(maxArr, arr[i]);
        minArr = Math.min(minArr, arr[i]);
    }
    max = sum - minArr;
    min = sum - maxArr;
    
    console.log(min, max);

}