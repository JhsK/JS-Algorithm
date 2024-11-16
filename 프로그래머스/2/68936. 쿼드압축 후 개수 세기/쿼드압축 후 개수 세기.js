function solution(arr) {
    const result = [0, 0];
    
    function quardZip(row, col, len) {
        let dividable = true;
        
        for (let i = row; i < row + len; i++) {
            for (let j = col; j < col + len; j++) {
                if (arr[row][col] !== arr[i][j]) {
                    dividable = false;
                }
            }
        }
        
        const half = Math.floor(len / 2);
        
        if (!dividable) {
            quardZip(row, col, half);
            quardZip(row + half, col, half);
            quardZip(row, col + half, half);
            quardZip(row + half, col + half, half);
        } else {
            if (arr[row][col] === 1) result[1] += 1;
            else result[0] += 1;
        }
    }
    
    quardZip(0, 0, arr.length);
    return result;
}