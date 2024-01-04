// 최대 공약수 계산 함수
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// 최소 공배수 계산 함수
function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

// 사용 예시
let result = lcm(6, 10);
console.log(result); // 결과: 30
