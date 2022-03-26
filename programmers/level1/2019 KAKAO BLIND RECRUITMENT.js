function solution(dartResult) {
  let point = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (Number.isInteger(Number(dartResult[i]))) {
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        point.push(10);
        i++;
        continue;
      }
      point.push(Number(dartResult[i]));
    } else if (
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      let tmp = dartResult[i] === "S" ? 1 : dartResult[i] === "D" ? 2 : 3;
      point[point.length - 1] = Math.pow(point[point.length - 1], tmp);
    } else if (dartResult[i] === "#" || dartResult[i] === "*") {
      if (dartResult[i] === "*") {
        point[point.length - 1] = point[point.length - 1] * 2;
        point[point.length - 2] = point[point.length - 2] * 2;
      } else {
        point[point.length - 1] = -point[point.length - 1];
      }
    }
  }

  return point.reduce((a, b) => a + b, 0);
}

function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
