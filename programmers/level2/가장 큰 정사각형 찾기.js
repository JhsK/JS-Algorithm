function solution(board) {
  let result = 0;
  let row = board.length;
  let col = board[0].length;

  if (row < 2 || col < 2) return 1;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (board[i][j] !== 0) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
      }
      if (result < board[i][j]) result = board[i][j];
    }
  }

  return result * result;
}
