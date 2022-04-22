function solution(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) result.push(0);
    if (i === 1) result.push(1);
    if (i >= 2) {
      let sum = result[i - 1] + result[i - 2];
      result.push(sum % 1234567);
    }
  }
  return result[n];
}

// 재귀함수를 이용하였지만 시간초과로 인해 위처럼 반복문 사용
function solution(n) {
  const selfFn = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return selfFn(n - 1) + selfFn(n - 2);
  };

  return selfFn(n) % 1234567;
}
