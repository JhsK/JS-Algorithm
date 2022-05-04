function solution(s) {
  let tmp = 0;

  for (let x of s) {
    if (tmp <= 0 && x === ")") return false;
    if (x === "(") tmp++;
    else tmp--;
  }

  return tmp === 0 ? true : false;
}
