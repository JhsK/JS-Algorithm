function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let n = s.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (
      (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) ||
      (s.charCodeAt(n - i - 1) >= 97 && s.charCodeAt(n - i - 1) <= 122)
    ) {
      if (s[i] !== s[n - 1 - i]) answer = "NO";
    }
  }
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));

// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase().replace(/[^a-z]/g, '');
//     if(s.split('').reverse().join('')!==s) return "NO";
//     return answer;
// }
