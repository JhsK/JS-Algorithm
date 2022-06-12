function typeFn(type, num) {
  if (type === "small") return false;
  if (type === "middle" && num >= 900000) return true;
  else if (type === "large" && num >= 600000) return true;
  else return false;
}

function solution(periods, payments, estimates) {
  const isVIP = [];
  const nextVIP = [];
  let falseTrueNum = 0;
  let trueFalseNum = 0;
  const labelArr = ["small", "middle", "large"];

  for (let i = 0; i < periods.length; i++) {
    let label = "";
    if (periods[i] < 24) label = labelArr[0];
    else if (periods[i] < 60) label = labelArr[1];
    else label = labelArr[2];

    let calPayments = payments[i].reduce((a, b) => a + b);

    isVIP.push(typeFn(label, calPayments));
  }

  for (let i = 0; i < periods.length; i++) {
    let label = "";
    const periodsNum = periods[i] + 1;
    if (periodsNum < 24) label = labelArr[0];
    else if (periodsNum < 60) label = labelArr[1];
    else label = labelArr[2];

    let calPayments =
      payments[i].reduce((a, b) => a + b) + estimates[i] - payments[i][0];

    nextVIP.push(typeFn(label, calPayments));
  }

  for (let i = 0; i < isVIP.length; i++) {
    if (isVIP[i] === false && nextVIP[i] === true) falseTrueNum++;
    if (isVIP[i] === true && nextVIP[i] === false) trueFalseNum++;
  }

  return [falseTrueNum, trueFalseNum];
}

console.log(
  solution(
    [24, 59, 59, 60],
    [
      [
        50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
        50000, 50000,
      ],
      [
        50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
        50000, 50000,
      ],
      [
        350000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
        50000, 50000,
      ],
      [
        50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000, 50000,
        50000, 50000,
      ],
    ],
    [350000, 50000, 40000, 50000]
  )
);
