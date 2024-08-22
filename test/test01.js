class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(N, K) {
  const queue = new Queue();

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    for (let i = 1; i <= K - 1; i++) {
      let tmp = queue.pop();
      queue.push(tmp);
    }

    queue.pop();
  }

  return queue.pop();
}

console.log(solution(5, 2));
