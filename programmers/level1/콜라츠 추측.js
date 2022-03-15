function solution(num) {
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) return answer;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    answer++;
  }
  return -1;
}

function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(collatz(6));
