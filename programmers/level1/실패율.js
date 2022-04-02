function solution(N, stages) {
  let rate = [];
  let result = [];
  let arr = stages.sort((a, b) => a - b);

  for (let x of arr) {
    if (result.indexOf(x) !== -1) continue;
    const tmp = arr.filter((v) => v === x);
    result.push(x);
    rate.push(tmp.length / arr.length);
    arr = arr.filter((v) => v !== x);
  }

  for (let x in rate) {
  }
}
