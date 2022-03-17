function solution(n) {
  let arr = String(n).split("");
  let length = arr.length;
  let result = [];
  let answer = "";

  for (let i = 0; i < length; i++) {
    let max = Math.max(...arr);
    result.push(max);
    arr.splice(arr.indexOf(String(max)), 1);
  }

  for (let x of result) {
    answer += String(x);
  }
  return Number(answer);
}

function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}
