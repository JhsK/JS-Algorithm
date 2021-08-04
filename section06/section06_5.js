function solution(s) {
  let answer = 0;
  let stack = [];

  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
        answer += stack.length;
      } else if (stack[stack.length - 1] === ")") {
        stack.pop();
        answer += 1;
      }
    }
  }

  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
