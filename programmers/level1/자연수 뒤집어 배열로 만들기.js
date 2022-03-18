function solution(n) {
  let arr = String(n).split("").reverse();

  return arr.map((v) => Number(v));
}

function solution(n) {
  let arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
