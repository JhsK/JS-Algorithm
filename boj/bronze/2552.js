const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const T = input.shift();
let output = [];

for (let i = 0; i <= T; i++) {
  // i로 나누었을 때 0이면 output에 push한다
  if (T % i === 0) output.push(i)
}

if (output.length >= input[0]) {
  console.log(output[input[0] - 1]);
} else {
  // 만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력
  console.log(0);
}