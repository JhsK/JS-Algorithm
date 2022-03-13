function solution(x, n) {
  let tmp = x;
  let answer = [];
  answer.push(tmp);

  for (let i = 0; i < n - 1; i++) {
    tmp += x;
    answer.push(tmp);
  }

  return answer;
}

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
