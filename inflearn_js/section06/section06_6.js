function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length) {
    for (let j = 1; j < k; j++) {
      queue.push(queue.shift());
    }
    queue.shift();
    if (queue.length === 1) {
      answer = queue[0];
      break;
    }
  }
  return answer;
}

console.log(solution(8, 3));
