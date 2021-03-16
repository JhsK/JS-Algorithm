// 최대값 구하기

const a = 4;
const b = 2;
const c = 1;
const d = 3;

function MaxNumber(num1, num2, num3, num4) {
  let max = num1;

  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (d > max) {
    max = d;
  }

  return max;
}

console.log(MaxNumber(a, b, c, d));
