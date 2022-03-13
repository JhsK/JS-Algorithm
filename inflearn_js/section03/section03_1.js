function solution(s) {
  let answer = "YES";
  let arr = [];
  let n = s.length;

  for (let x of s) {
    arr.push(x.toUpperCase());
  }
  for (let i = 0; i < n; i++) {
    if (n % 2 === 1) {
      if (i === Math.round(n / 2)) break;
    }
    if (arr[i] !== arr[n - 1 - i]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));

// function solution(s){
//     let answer="YES";
//     s=s.toLowerCase();
//     if(s.split('').reverse().join('')!=s) return "NO";
//     return answer;
// }

// let str="gooG";
// console.log(solution(str));
