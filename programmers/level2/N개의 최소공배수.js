function isLcd(a, b) {
  let min = Math.max(a, b);
  let max = Math.min(a, b);
  let tmp = [min, max];

  while (min !== 0) {
    let r = max % min;
    max = min;
    min = r;
  }

  return (tmp[0] * tmp[1]) / max;
}

function solution(arr) {
  let tmp = [];

  for (let x of arr) {
    if (tmp.length === 0) tmp.push(x);
    else {
      tmp = [isLcd(tmp[0], x)];
    }
  }

  return tmp[0];
}

console.log(solution([2, 6, 8, 14]));

// 최소공배수를 구하기 위해 유클리드 호제법을 이용하여 최소공약수를 구하고 그걸 이용하여 최소공배수를 구한다. 여러 개으 최소 공배수는 2개의 수 중 최소공배수를 구하고 구한 최소공배수랑 다음 수랑 다시 최소공배수를 구하는 식으로 문제를 풀어나간다

function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
