function solution(n) {
  let arr = String(n).split("");

  return arr.reduce((a, b) => Number(a) + Number(b), 0);
}
