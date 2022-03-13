function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) answer++;
  }

  //   for (let x of s) {
  //       if (x === x.toUpperCase()) answer++;
  //   }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
