function solution(x) {
  let answer = true;
  let sum = Array.from(String(x)).reduce((a, b) => Number(a) + Number(b));

  if (x % Number(sum) !== 0) answer = false;
  return answer;
}

function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
