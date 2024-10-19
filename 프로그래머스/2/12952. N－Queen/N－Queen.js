function solution(n) {
    let result = 0;
    const queens = Array(n).fill(0);
    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (queens[i] === col || Math.abs(queens[i] - col) === row - i) {
                return false;
            }
        }
        
        return true;
    }
    
    function placedQueen(row) {
        if (row === n) {
            result++;
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                queens[row] = col;
                placedQueen(row+1);
            }
        }
    }
    
    placedQueen(0);
    return result;
}