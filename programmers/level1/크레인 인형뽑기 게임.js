function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] > 0) {
        let tmp = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
          break;
        } else {
          stack.push(tmp);
          break;
        }
      }
    }
  }

  return answer;
}
