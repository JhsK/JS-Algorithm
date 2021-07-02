function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      s = s.replace("A", "#");
      answer += s[i];
    } else answer += s[i];
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
