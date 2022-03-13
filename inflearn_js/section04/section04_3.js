function solution(test) {
  let answer = 0;
  let m = test[0].length;
  let n = test.length;

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let tmp = 0;
      for (let k = 0; k < n; k++) {
        let x = 0;
        let y = 0;
        for (let z = 0; z < m; z++) {
          if (i === test[k][z]) x = z;
          if (j === test[k][z]) y = z;
        }
        if (x > y) tmp++;
      }
      if (tmp === 3) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
