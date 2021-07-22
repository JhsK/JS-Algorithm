function solution(test) {
  let answer = 0;
  let stNum = test[0].length; // 4
  let testNum = test.length; // 3

  for (let i = 1; i <= stNum; i++) {
    for (let j = 1; j <= stNum; j++) {
      let cnt = 0;
      for (let k = 0; k < testNum; k++) {
        let tmpI = 0;
        let tmpJ = 0;
        for (let z = 0; z <= stNum; z++) {
          if (test[k][z] === i) tmpI = z;
          if (test[k][z] === j) tmpJ = z;
        }
        if (tmpI < tmpJ) cnt++;
      }
      if (cnt === testNum) answer++;
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
