function solution(atmos) {
  let result = 0; // 사용한 마스크의 개수
  let mask = 0; // 사용하고 있는 마스크의 일 수
  let reset = 0;

  for (let i = 0; i < atmos.length; i++) {
    if (mask === 3 || reset === 1) {
      mask = 0;
      reset = 0;
    }
    if ((mask === 0 && atmos[i][0] >= 81) || atmos[i][1] >= 36) {
      mask++;
    } else if (mask !== 0) {
      mask++;
    }

    if (atmos[i][0] >= 151 && atmos[i][1] >= 76) {
      reset++;
    }

    if (mask === 1) result++;
    console.log(i, result, mask);
  }
  return result;
}

console.log(
  solution([
    [140, 90],
    [177, 75],
    [95, 45],
    [71, 31],
    [150, 30],
    [80, 35],
    [72, 33],
    [166, 81],
    [151, 75],
  ])
);
