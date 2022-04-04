function solution(n, lost, reserve) {
  for (let j of lost) {
    if (reserve.indexOf(j) !== -1) {
      lost.splice(lost.indexOf(j), 1);
      reserve.splice(reserve.indexOf(j), 1);
    }
  }

  let calLost = lost.slice();

  for (let x of lost) {
    let tmp = reserve.filter((v) => v === x + 1 || v === x - 1);
    if (tmp.length > 0) {
      calLost.splice(calLost.indexOf(x), 1);
      reserve.splice(reserve.indexOf(tmp[0]), 1);
    }
  }

  return n - calLost.length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
