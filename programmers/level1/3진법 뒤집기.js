function solution(n) {
  let threeCal = [];
  let calN = n;
  let resultArr;
  let result = 0;

  if (calN < 3) threeCal.push(n);

  while (calN >= 3) {
    threeCal.unshift(calN % 3);
    calN = parseInt(calN / 3, 10);

    if (calN < 3) threeCal.unshift(calN);
  }

  resultArr = threeCal.reverse().join("");

  for (let x in resultArr) {
    let tmp = resultArr.length - 1 - x;
    result += resultArr[x] * 3 ** tmp;
  }

  return result;
}

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
