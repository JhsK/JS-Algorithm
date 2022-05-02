function solution(n, t, m, p) {
  let arr = [];
  let result = [];
  let turn = 1;
  for (let i = 0; i <= 1000 * m; i++) {
    arr = [
      ...i
        .toString(n)
        .split("")
        .map((num) => num.toUpperCase()),
    ];

    while (arr.length > 0) {
      if (turn > m) turn = 1;
      if (turn === p) {
        result.push(arr.shift());
        if (result.length === t) return result.join("");
      } else arr.shift();
      turn++;
    }
  }

  return result;
}
