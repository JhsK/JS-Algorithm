function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// let i = s; -> 다음과 같은 구문에서 s가 배열이라면 얕은 복사를 통해 서로 주소를 가리키지만
// s가 문자열이라면 얕은 복사가 아닌 값이 복사가 되어서 서로 다른 것을 가리킨다.

// for (let i = 0; i < s.length; i++) {
//   if (s[i] === "A") {
//     s = s.replace("A", "#");
//     answer += s[i];
//   } else answer += s[i];
// }
