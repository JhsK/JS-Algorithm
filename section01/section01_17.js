function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
  });

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

// let answer = [];
// let tmp = 0;

// for (let x of s) {
//   if (s.indexOf(x) === tmp) answer.push(x);
//   tmp++;
// }
