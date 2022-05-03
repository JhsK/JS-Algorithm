function solution(S) {
  let result = S.slice();
  let stack = [];
  let repeatNum = 1;

  for (let i = 0; i < S.length; i++) {
    if (stack.length === 0) stack.push(S[i]);
    else {
      if (stack[0] === S[i]) repeatNum++;
      else {
        stack.pop();
        repeatNum = 1;
      }
      if (repeatNum === 3) {
        result = result.replace(result[result.indexOf(S[i])], "");
      }
    }
  }

  return result;
}

console.log(solution("eedaaad"));
