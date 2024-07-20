let fs = require("fs");
let input = "2 162";

class Queue {
  constructor() {
    this._arr = [];
    this.first = 0;
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    if (this.first === 0) return this._arr.shift();
    return this._arr[this.first++];
  }
  getLength() {
    return this._arr.length - this.first;
  }
}

let max = 1e9;
let found = false;
let [n, m] = input[0].split(" ").map(Number);
const queue = new Queue();
queue.enqueue([1, n]); // depth, num

while (queue.getLength() !== 0) {
  let [count, cur] = queue.dequeue();
  if (cur === n) {
    console.log(count);
    found = true;
    break;
  }
  for (let x of [cur * 2, Number(cur + "1")]) {
    if (x <= max) {
      queue.enqueue([count + 1, x]);
    } else break;
  }
}

if (!found) console.log(-1);
