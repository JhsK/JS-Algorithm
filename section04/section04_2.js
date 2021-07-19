function boolNumber(number) {
  let cnt = 0;

  if (number === 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) cnt++;
  }

  return cnt > 0 ? false : true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let tmp = x;
    let reNum = "";
    //let res=Number(x.toString().split('').reverse().join(''));
    while (tmp) {
      reNum += String(tmp % 10);
      tmp = Math.floor(tmp / 10);
    }
    reNum = Number(reNum);
    if (boolNumber(reNum) === true) answer.push(reNum);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
