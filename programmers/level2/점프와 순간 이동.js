function solution(n) {
  let result = 0;

  while (n > 0) {
    if (n % 2 !== 0) {
      n -= 1;
      result += 1;
    } else {
      n = n / 2;
    }
  }

  return result;
}
