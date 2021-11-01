function birthdayCakeCandles(candles) {
    let max = candles[0];
    let max_cnt = 1;
    for (let i = 1; i < candles.length; i++) {
        if (max === candles[i]) max_cnt++;
        if (max < candles[i]) max = candles[i];
    }
    return max_cnt;

}