function solution(N, stages) {
  let rate = [];
  let result = [];
  let resultObj = {};

  for (let i = 1; i <= N; i++) {
    const left = stages.filter((v) => v === i);
    const right = stages.filter((v) => v >= i);

    if (right.length === 0) {
      rate.push(0);
      resultObj[i] = 0;
    } else {
      const calRate = left.length / right.length;
      rate.push(calRate);
      resultObj[i] = calRate;
    }
  }

  rate = rate.sort((a, b) => b - a);
  let resultArr = Object.entries(resultObj);

  for (let x of rate) {
    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i][1] === x) {
        result.push(Number(resultArr[i][0]));
        resultArr.splice(i, 1);
        break;
      }
    }
  }

  return result;
}

function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
