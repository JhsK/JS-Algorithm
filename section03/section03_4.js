function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

// let str = "teachermode";
// console.log(solution(str, "e"));

// let answer = [];
// let index = [];
// let min = Number.MAX_SAFE_INTEGER;

// for (let i = 0; i < s.length; i++) {
//   if (s[i] === t) index.push(i);
// }

// for (let i = 0; i < s.length; i++) {
//   for (let j = 0; j < index.length; j++) {
//     if (Math.abs(index[j] - i) < min) min = Math.abs(index[j] - i);
//   }
//   answer.push(min);
//   min = Number.MAX_SAFE_INTEGER;
// }
// return answer;
