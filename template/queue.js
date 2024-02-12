class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  qnqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

// or

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

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
