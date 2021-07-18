function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else if (cnt > 1) {
      answer = answer + s[i] + cnt;
      cnt = 1;
    } else answer += s[i];
  }
  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
