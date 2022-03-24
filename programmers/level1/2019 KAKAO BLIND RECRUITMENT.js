function bonusNum(char) {
  let tmp = 0;
  switch (char) {
    case "S":
      tmp = 1;
      break;
    case "D":
      tmp = 2;
      break;
    case "T":
      tmp = 3;
      break;
  }
  return tmp;
}

function solution(dartResult) {
  let result = [];

  for (let x of dartResult) {
    if (!isNaN(x)) {
      if (x === "0" && result[result.length - 1] === 1) continue;
      if (x === "1") {
        if (dartResult[dartResult.lastIndexOf(x) + 1] === "0") {
          console.log("asf", dartResult, dartResult.lastIndexOf(x));
          result.push(10);
        } else result.push(Number(x));
      } else result.push(Number(x));
    } else if (x === "S" || x === "D" || x === "T") {
      let tmp = bonusNum(x);
      result[result.length - 1] = result[result.length - 1] ** tmp;
    } else if (x === "*" || x === "#") {
      if (x === "*") {
        result[result.length - 1] = result[result.length - 1] * 2;
        if (result.length - 2 >= 0) {
          result[result.length - 2] = result[result.length - 2] * 2;
        }
      } else {
        result[result.length - 1] = -result[result.length - 1];
      }
    }
  }
  // return result.reduce((a, b) => a + b);
}

console.log(solution("1D2S#10S"));
