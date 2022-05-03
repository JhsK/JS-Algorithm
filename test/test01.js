function solution(N, K) {
  let result = String(N)
    .split("")
    .map((num) => Number(num));
  let plus = K;

  if (plus === 0 || N === 999) return result.join("");
  for (let i = 0; i < result.length; i++) {
    result[i] += plus;
    let tmp = result[i] - 9;
    if (tmp > 0) {
      result[i] -= tmp;
      plus = tmp;
    } else break;
  }
  return result.join("");
}

console.log(solution(999, 10));
