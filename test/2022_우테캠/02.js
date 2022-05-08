function solution(scores) {
  let hardSum = [0, 0];
  for (let i = 0; i < scores.length; i++) {
    hardSum[0] += scores[i][0];
    hardSum[1] += scores[i][1];
  }
  let sumArr = scores
    .map((score, index) => [index + 1, score[0] + score[1]])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        if (hardSum[0] > hardSum[1]) {
          if (scores[a[0] - 1][0] > scores[b[0] - 1][0]) {
            return 1;
          } else if (scores[a[0]][0] < scores[b[0]][0]) {
            return -1;
          } else {
            if (a[0] < b[0]) {
              return -1;
            } else {
              return 1;
            }
          }
        } else if (hardSum[0] < hardSum[1]) {
          if (scores[a[0] - 1][1] > scores[b[0] - 1][1]) {
            return 1;
          } else if (scores[a[0] - 1][1] < scores[b[0] - 1][1]) {
            return -1;
          } else {
            if (a[0] < b[0]) {
              return -1;
            } else {
              return 1;
            }
          }
        } else {
          if (a[0] < b[0]) {
            return -1;
          } else {
            return 1;
          }
        }
      }
      return b[1] - a[1];
    });

  return sumArr
    .map((v, i) => [v[0], i + 1])
    .sort((a, b) => a[0] - b[0])
    .map((v) => v[1]);
}
