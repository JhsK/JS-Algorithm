// 중간값 구하기

const a = 2;
const b = 5;
const c = 3;

const MiddleNumber = (a, b, c) => {
  if (a >= b) {
    if (b >= c) {
      return b;
    } else if (a <= c) {
      return a;
    } else {
      return c;
    }
  } else if (a > c) {
    return a;
  } else if (b > c) {
    return c;
  } else {
    return b;
  }
};

console.log(MiddleNumber(a, b, c));
