function isPrime(n) {
  if (n == 1 || n === "") return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solution(n, k) {
  let result = 0;
  let transferNum = n.toString(k);
  let primeArr = transferNum.split("0").filter((v) => isPrime(v));
  console.log(primeArr);
  return primeArr.length;
}

console.log(solution(110011, 10));
