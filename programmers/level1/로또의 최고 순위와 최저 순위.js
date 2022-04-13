function solution(lottos, win_nums) {
  let correct = [];
  let n = lottos.length;
  let rest = win_nums.slice();
  let result = [];
  let zeroLength = lottos.filter((v) => v === 0).length;

  for (let x of win_nums) {
    if (lottos.indexOf(x) !== -1) {
      correct.push(x);
      rest.splice(lottos.indexOf(x), 1);
    }
  }

  if (n - (correct.length + zeroLength) + 1 >= n) {
    result.push(n);
  } else {
    result.push(n - (correct.length + zeroLength) + 1);
  }

  if (n - correct.length >= n) {
    result.push(n);
  } else {
    result.push(n - correct.length + 1);
  }

  return result;
}

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
