function diagonalDifference(arr) {
    let tmpX = 0;
    let tmpY = 0;
    let answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        tmpX += arr[i][i];
    }
    
    for (let j = 0; j < arr.length; j++) {
        tmpY += arr[j][arr.length - 1 - j];
    }
    
    answer = Math.abs(tmpX - tmpY);
    return answer;
}