let k = 2;
let arr = "< >";
let visited = new Array(10).fill(false);
let result = [];
let current = "";
let first = "";

function dfs(depth) {
  if (depth === k + 1) {
    let check = true;
    for (let i = 0; i < k; i++) {
      if (arr[i] === "<") {
        if (result[i] > result[i + 1]) check = false;
      } else if (arr[i] === ">") {
        if (reuslt[i] < result[i + 1]) check = false;
      }
    }
    if (check) {
      current = "";
      for (let x of result) current += x + "";
      if (first === "") first = current;
    }
    return;
  }
  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}

dfs(0);
console.log(current + "\n" + first);
