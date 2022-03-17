function solution(n) {
  let result = Math.sqrt(n);
  return result % 1 !== 0 ? -1 : (result + 1) ** 2;
}
