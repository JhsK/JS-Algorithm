function solution(s) {
  let answer = "";
  let cal = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(cal, cal + 1);
  else answer = s.substring(cal - 1, cal + 1);
  return answer;
}
console.log(solution("study"));
