// const input = require("fs").readFileSync("/dev/stdin").toString().split('/n');
const input = [1, 13];

const target = Number(input[1]);

function result(n) {
  let cnt = 0;
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      if (n % 2 === 1) answer += cnt + " ";
      cnt++;
      DFS(parseInt(n / 2));
    }
  }
  DFS(n);

  return answer;
}

console.log(result(target));
